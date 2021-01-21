<template>
  <el-container class="root-container">
    <el-header class="header-container">
      <Header></Header>
    </el-header>
    <el-main><Main></Main></el-main>
    <el-footer><Footer></Footer></el-footer>
  </el-container>
  <transition name="sidebar">
    <SideBar v-show="sideBarOpen" class="sidebar-container"></SideBar>
  </transition>
  <transition name="mask-show">
    <div
      v-show="sideBarOpen"
      class="drawer-bg"
      @click="handleClickOutside"
    ></div>
  </transition>
  <el-drawer title="设置" :visible="settingOpen">
    <span>我来啦!</span>
  </el-drawer>

  <!-- <tool-bar></tool-bar> -->
</template>
<script lang="ts">
import { AppModule, DeviceType } from "@/store/modules/app";
import { Options, Vue } from "vue-class-component";
import SideBar from "@/components/sidebar.vue";
import Header from "./layout-components/header.vue";
import Main from "./layout-components/main.vue";
import Footer from "./layout-components/footer.vue";
import { SettingsModule } from "@/store/modules/setting";
@Options({
  name: "Layout",
  components: {
    SideBar,
    Header,
    Main,
    Footer,
  },
})
export default class Layout extends Vue {
  get classObj() {
    return {
      hideSidebar: !this.sidebar.open,
      openSidebar: this.sidebar.open,
      withoutAnimation: this.sidebar.hasAnimation,
      mobile: this.device === DeviceType.Mobile,
    };
  }

  get device() {
    return AppModule.device;
  }
  get sidebar() {
    return AppModule.sideBar;
  }

  get sideBarOpen() {
    return AppModule.sideBar.open;
  }

  get settingOpen() {
    return SettingsModule.showSettings;
  }

  private handleClickOutside() {
    AppModule.CloseSideBar(false);
  }
}
</script>
<style lang="scss" scoped>
.header-container {
  height: 9vh !important;
}
.el-main {
  padding: 10px;
}
.el-header {
  padding: 0 10px;
}
.el-footer {
  height: min-content !important;
  padding: 0 10px;
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}
.root-container {
  height: 100%;
}

.sidebar-container {
  width: 210px;
  height: 100%;
  position: fixed;
  font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0px;
  z-index: 1001;
  overflow: hidden;
}

// 遮罩层动画
.mask-show-enter,
.mask-show-leave-to {
  opacity: 0;
}

.mask-show-enter-active,
.mask-show-leave-active {
  transition: opacity linear 0.18s;
}
.sidebar-enter-to {
  transform: translateX(210px);
}
.sidebar-leave {
  transform: translateX(-210px);
}

.sidebar-leave-to {
  transform: translateX(-210px);
}

.sidebar-enter-active {
  transition: transform linear 0.18s;
  left: -210px;
}
.sidebar-leave-active {
  transition: transform linear 0.18s;
}
</style>
