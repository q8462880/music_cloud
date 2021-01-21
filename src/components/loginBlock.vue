<template>
  <el-form
    class="form-contaner"
    label-position="left"
    label-width="80px"
    :model="formLogin"
  >
    <el-form-item class="input-container" label="手机">
      <el-input v-model="formLogin.telePhone"></el-input>
    </el-form-item>
    <el-form-item class="input-container" label="密码">
      <el-input
        type="password"
        autocomplete="off"
        v-model="formLogin.passWord"
      ></el-input>
    </el-form-item>
    <el-form-item class="button-container">
      <el-button type="primary" @click="loginSubmitFrom(formLogin)"
        >login</el-button
      >
      <el-button @click="toogleLoginBlock">cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { getUserPlayList, loginCloud } from "@/api/music-163/cloudUser";
import { AppModule } from "@/store/modules/app";
import { UserModule } from "@/store/modules/user";
import { setUserName, setUserPwd } from "@/utils/cookies";
import { Options, Vue } from "vue-class-component";
@Options({
  name: "LoginBlock",
})
export default class LoginBlock extends Vue {
  public formLogin = {
    telePhone: "",
    passWord: "",
  };

  private toogleLoginBlock() {
    AppModule.ToggleLoginBlock();
  }

  private loginSubmitFrom(param: any) {
    loginCloud(param).then((data) => {
      UserModule.saveUserInfo(data);
      setUserName(param.telePhone);
      setUserPwd(param.passWord);
      AppModule.ToggleLoginBlock();
      this.refreshMyInfo();
    });
  }
  private refreshMyInfo() {
    getUserPlayList(UserModule.profile.userId).then((data: any) => {
      UserModule.savePlayList(data.playlist);
    });
  }
}
</script>

<style lang="scss">
.form-contaner {
  padding: 1rem;
  padding-bottom: 0;
}
.input-container .el-form-item__label {
  width: 3rem !important;
}
.input-container .el-form-item__content {
  margin-left: 3rem !important;
}
.button-container {
  margin-bottom: 0 !important;
}
.button-container .el-form-item__content {
  margin-left: 0 !important;
}
</style>
