import request from '@/utils/request';

export const loginCloud = (params: any) =>
    request({
        url: `/cloud/login/cellphone?phone=${params.telePhone}&password=${params.passWord}`,
        method: 'post',
    });

export const getUserPlayList = (uid: number) =>
    request({
        url: `/cloud/user/playlist?uid=${uid}`,
        method: 'post',
    });

export const getDailyRecommand = () =>
    request({
        url: `/cloud/recommend/resource`,
        method: 'post',
    });

export const deleteRole = (id: number) =>
    request({
        url: `/ roles / ${id}`,
        method: 'delete'
    });

export const getRoutes = (params: any) =>
    request({
        url: '/routes',
        method: 'get',
        params
    });;
