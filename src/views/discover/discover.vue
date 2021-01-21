<template>
  <el-carousel v-if="showCarousel" :interval="4000" type="card" :height="carouselHeight">
    <el-carousel-item v-for="song in dailyRecommand" :key="song.id">
      <img class="img-album" :alt="song.name" :src="song.picUrl" />
    </el-carousel-item>
  </el-carousel>
  <div class="container border-bottom">
    <div
      v-for="(item, index) in findIcons"
      :key="index"
      class="icon-list"
      :class="{ width }"
    >
      <div class="icon" :class="{ bgcolor }">
        <el-button type="info" size="medium" :icon="item.icon" round>
        </el-button>
      </div>
      <span class="icon-text">{{ item.text }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { getDailyRecommand } from "@/api/music-163/cloudUser";
import { AppModule } from "@/store/modules/app";
import { UserModule } from "@/store/modules/user";
import { Options, Vue } from "vue-class-component";
@Options({
  name: "Discover",
  components: {},
})
export default class Discover extends Vue {
  private showCarousel = false;
  get dailyRecommand() {
    return UserModule.dailyRecommand;
  }

  get carouselHeight() {
    const height = AppModule.device === 0 ? "10rem" : "20rem";
    return height;
  }
  public AlbumPictures = [
    {
      name: "testtt",
      url:
        "https://p1.music.126.net/ofgqqSrzdZMoE0FZXb7vRA==/109951164866584609.jpg",
    },
    {
      name: "tests",
      url:
        "https://p1.music.126.net/FhAvDvCu2hVmAp5catMMPw==/18350849068367151.jpg",
    },
    {
      name: "testt",
      url:
        "https://p1.music.126.net/UTyL4rccEbXPCQctmLne7g==/109951164964580034.jpg",
    },
  ];

  public findIcons = [
    {
      text: "每日推荐",
      icon: "el-icon-date",
      linkTo: "dateRecommend",
    },
    {
      text: "歌单",
      icon: "el-icon-headset",
      linkTo: "recommend",
    },
    {
      text: "排行榜",
      icon: "el-icon-s-data",
      linkTo: "idx",
    },
    {
      text: "直播",
      icon: "el-icon-video-play",
      linkTo: "live",
    },
  ];

  created() {
    getDailyRecommand().then((rsp: any) => {
      UserModule.saveDailyRecommand(rsp.recommend);
      this.showCarousel = true;
    });
  }
}
</script>
<style lang="scss">
.img-album {
  width: 100%;
  height: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 5rem;
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
.icon-list {
  // 每项 icon 样式
  width: 3rem;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  color: #000;
  .bgcolor {
    background: linear-gradient(to right, #ff5a4c, #ff1d11);
  }
  .icon {
    width: 100%;
    height: 60%;
    // line-height: 0.8rem;
    // border-radius: 50%;
    text-align: center;
    position: relative;
    color: #fff;
    .el-button {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #2d1919;
      border-color: #2d1919;
      border-radius: 2rem;
      height: 100% !important;
      width: 100% !important;
      i {
        color: #b63030;
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
    font-size: 0.24rem;
  }
}
</style>
