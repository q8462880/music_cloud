<template>
  <el-collapse class="like-ay-container" accordion>
    <el-collapse-item title="我喜爱的音乐类型">
      <div>
        <CardIntro :info="ftype"></CardIntro>
      </div>
      <div></div>
    </el-collapse-item>
    <el-collapse-item title="我喜爱的歌手">
      <CardIntro :info="fsinger"></CardIntro>
    </el-collapse-item>
    <el-collapse-item title="最近播放次数最多">
      <CardIntro :info="playmore"></CardIntro>
    </el-collapse-item>
    <el-collapse-item title="我的最爱">
      <CardIntro :info="fsong"></CardIntro>
    </el-collapse-item>
  </el-collapse>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CardIntro from "./cardIntro.vue";
@Options({
  components: {
    CardIntro,
  },
})
export default class LikeAnalizy extends Vue {
  public ftype = {
    name: "funky",
    url:
      "https://p1.music.126.net/ofgqqSrzdZMoE0FZXb7vRA==/109951164866584609.jpg",
  };
  public fsinger = {
    name: "jamesBrown",
    url:
      "https://p1.music.126.net/ZSgSkUfH2U9GRC1OD6BBtQ==/109951163254194661.jpg",
  };
  public playmore = {
    name: "funky you up",
    url:
      "https://p1.music.126.net/gxMug2SRrpvGFKWoH2pLkg==/109951164849496349.jpg",
  };
  public fsong = {
    name: "sexy dancer",
    url:
      "https://p2.music.126.net/9qHDivy6UEiSRcN2g9NeEw==/109951163626863489.jpg",
  };
}
</script>

<style lang="scss">
.el-collapse {
  color: #fff;
  width: 100%;
  border: 0 !important;
  border-radius: 0.8rem;
  overflow: hidden;
}
.like-ay-container {
  .el-collapse-item__header {
    padding: 0 1rem;
    background-color: #2e2e31 !important;
    border-bottom: 1px solid #1418231c;
    color: #fff !important;
  }
  .el-collapse-item__content {
    padding: 1rem;
    background-color: #2e2e31 !important;
    border-bottom: 1px solid #1418231c;
    color: #fff !important;
  }
}
</style>
