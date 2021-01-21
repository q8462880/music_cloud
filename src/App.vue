<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" />
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <router-view />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";
import { AppModule } from "./store/modules/app";
import { getUserName, getUserPwd } from "@/utils/cookies";
import _ from "lodash";
import { getUserPlayList, loginCloud } from "./api/music-163/cloudUser";
import { UserModule } from "./store/modules/user";

export default {
  name: "app",
  components: {},
  created() {
    const isMobile =
      navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      ) === null
        ? 1
        : 0;
    AppModule.ToggleDevice(isMobile);
    const telePhone = getUserName();
    const passWord = getUserPwd();
    if (!_.isEmpty(telePhone) && !_.isEmpty(passWord)) {
      loginCloud({ telePhone, passWord }).then((data) => {
        UserModule.saveUserInfo(data);
        getUserPlayList(UserModule.profile.userId).then((data: any) => {
          UserModule.savePlayList(data.playlist);
        });
      });
    }
  },
};
</script>

<style>
#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
