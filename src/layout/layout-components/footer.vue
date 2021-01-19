<template>
  <audio
    id="play1"
    :controls="showPlayerFooter"
    :autoplay="playing"
    :src="playerSongUrl"
  ></audio>
  <div class="footer-container border-bottom">
    <div
      v-for="(item, index) in findIcons"
      :key="index"
      class="footer-icon-list"
      :class="{ width }"
    >
      <div class="footer-icon" :class="{ bgcolor }">
        <el-button
          type="info"
          size="medium"
          :icon="item.icon"
          round
          @click="switchPage(item.linkTo)"
        >
        </el-button>
      </div>
      <span class="icon-text">{{ item.text }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { MyPlayerModule } from "@/store/modules/player";
import { Options, Vue } from "vue-class-component";

@Options({
  name: "Footer",
  components: {},
})
export default class Footer extends Vue {
  public findIcons = [
    {
      text: "发现",
      icon: "el-icon-service",
      linkTo: "discover",
    },
    {
      text: "我的",
      icon: "el-icon-mobile-phone",
      linkTo: "my",
    },
    {
      text: "K歌",
      icon: "el-icon-microphone",
      linkTo: "sing",
    },
    {
      text: "播客",
      icon: "el-icon-video-play",
      linkTo: "player",
    },
  ];

  get playerSongUrl() {
    return MyPlayerModule.currentPlaySongUrl;
  }

  get showPlayerFooter() {
    return MyPlayerModule.showPlayerFooter;
  }

  get playing() {
    return MyPlayerModule.playing;
  }

  private switchPage(link: string) {
    this.$router.push(link);
  }
}
</script>

<style lang="scss">
.footer-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 8vh;
  align-items: center;
  padding: 0.2rem 0 0.3rem;
  .today {
    position: absolute;
    top: 0.09rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.2rem;
  }
}
.footer-icon-list {
  // 每项 icon 样式
  width: 2.6rem;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  color: #000;
  .bgcolor {
    background: linear-gradient(to right, #ff5a4c, #ff1d11);
  }
  .footer-icon {
    width: 100%;
    height: 80%;
    // line-height: 0.8rem;
    // border-radius: 50%;
    text-align: center;
    position: relative;
    color: #fff;
    .el-button {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #b73030;
      border-color: #b73030;
      border-radius: 2rem;
      height: 100% !important;
      width: 100% !important;
      i {
        color: #fff;
        font-size: 1.4rem;
      }
    }
    .home {
      font-size: 0.4rem;
    }
    .find {
      font-size: 0.5rem;
    }
    .dj {
      font-size: 0.4rem;
    }
    .login {
      font-size: 0.4rem;
      background-color: transparent;
      color: #ff1d11;
    }
  }
  .icon-text {
    margin-top: 0.1rem;
    color: #a7a7a7;
    font-size: 0.6rem;
  }
}
</style>
