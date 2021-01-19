import axios from 'axios';
import Message from 'element-plus/lib/el-message';
import MessageBox from 'element-plus/lib/el-message-box';

// import { UserModule } from '@/store/modules/user'

const service = axios.create({
    //   baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    timeout: 10000
    // withCredentials: true // send cookies when cross-domain requests
});

// Request interceptors
service.interceptors.request.use(
    (config) => {
        // Add X-Access-Token header to every request, you can add other custom headers here
        // if (UserModule.token) {
        //   config.headers['X-Access-Token'] = UserModule.token
        // }
        config.headers["Access-Control-Allow-Origin"] = "*";
        config.headers["Access-Control-Allow-Headers"] = "ua,version,channel,subchannel,content-type,mgm-user-agent,IMEI,IMSI,mgm-Network-type,mgm-Network-standard,uid,logId,msisdn,location-data,location-info,mgm-network-operators,test,token,activityId,aversionid,bversionid,mtoken,OAID,HWID,deviceId";
        config.headers["Access-Control-Allow-Methods"] = "GET,POST";
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

// Response interceptors
service.interceptors.response.use(
    (response) => {
        // Some example codes here:
        // code == 20000: success
        // code == 50001: invalid access token
        // code == 50002: already login in other place
        // code == 50003: access token expired
        // code == 50004: invalid user (user not exist)
        // code == 50005: username or password is incorrect
        // You can change this part for your own usage.
        const res = response.data;
        if (res.code !== 200) {
            Message({
                message: res.message || 'Error',
                type: 'error',
                duration: 5 * 1000
            });
            if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
                MessageBox.confirm(
                    '你已被登出，可以取消继续留在该页面，或者重新登录',
                    '确定登出',
                    {
                        confirmButtonText: '重新登录',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }
                ).then(() => {
                    //   UserModule.ResetToken()
                    location.reload(); // To prevent bugs from vue-router
                });
            }
            return Promise.reject(new Error(res.message || 'Error'));
        } else {
            return response.data
        }
    },
    (error) => {
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        });
        return Promise.reject(error);
    }
);

export default service;