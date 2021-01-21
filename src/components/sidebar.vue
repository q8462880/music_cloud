<template>
  <el-menu default-active="2" @open="handleOpen" @close="handleClose">
    <div
      v-if="!showLoginBlock"
      class="user-enter-container"
      @click.prevent="toogleLoginBlock()"
    >
      <div class="user-avatar-container">
        <el-avatar size="medium" :src="avatar"> </el-avatar>
      </div>
      <div class="user-name-container">
        {{ nickname }}
      </div>
    </div>
    <LoginBlock v-if="showLoginBlock"></LoginBlock>
    <div class="content-container">
      <!-- <LikeAnalizy></LikeAnalizy> -->
      <el-button class="logout-button">退出登录</el-button>
    </div>
  </el-menu>
</template>
<script lang="ts">
import { AppModule, DeviceType } from "@/store/modules/app";
import { UserModule } from "@/store/modules/user";
import { Options } from "vue-class-component";
import { Vue } from "vue-class-component";
import LikeAnalizy from "./likeAnalizy.vue";
import LoginBlock from "./loginBlock.vue";
@Options({
  name: "SideBar",
  components: {
    LikeAnalizy,
    LoginBlock,
  },
})
export default class SideBar extends Vue {
  get device() {
    return AppModule.device;
  }
  get sidebar() {
    return AppModule.sideBar;
  }

  get showLoginBlock() {
    return this.sidebar.showloginblock;
  }
  get isCollapse() {
    return !this.sidebar.open;
  }

  get nickname() {
    return UserModule.profile.nickname;
  }

  get avatar() {
    return UserModule.profile.avatarUrl;
  }

  private toogleLoginBlock() {
    AppModule.ToggleLoginBlock();
    console.log(AppModule.sideBar.showloginblock);
  }
}
</script>
<style lang="scss" scoped>
.el-menu {
  border-right: solid 1px #5d59598c;
}
.sidebar-container {
  background-color: #0c0b0b;
}
.user-enter-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  height: 2.4rem;
  padding-bottom: 0;
}

.user-name-container {
  height: 100%;
  width: 70%;
  color: #fff;
  font-size: 1rem;
  align-items: center;
  display: flex;
  justify-content: flex-start;
  padding-left: 1rem;
}

.user-avatar-container {
}
.content-container {
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.logout-button {
  font-size: 0.9rem;
  margin-top: 1rem;
  width: 100%;
  border: 0 !important;
  border-radius: 0.8rem;
  overflow: hidden;
  color: #8a2828;
  background-color: #2e2e31 !important;
  font-weight: 700;
}
</style>
