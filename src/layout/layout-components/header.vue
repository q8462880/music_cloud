<template>
  <div class="header-container">
    <el-button
      size="medium"
      icon="el-icon-s-fold"
      round
      @click="toogleSideBar"
    ></el-button>
    <el-input
      class="header-search-input"
      size="medium"
      placeholder="search your songs"
      prefix-icon="el-icon-search"
      v-model="inputKeyWord"
      @keyup.enter.prevent="onkeyWordSearch(inputKeyWord)"
    >
    </el-input>
    <el-button
      size="medium "
      icon="el-icon-setting"
      round
      @click="toogleSetting"
    ></el-button>
  </div>
</template>

<script lang="ts">
import { AppModule } from "@/store/modules/app";
import { SettingsModule } from "@/store/modules/setting";
import { MyPlayerModule } from "@/store/modules/player";
import { Options, Vue } from "vue-class-component";
import { getSongsByKeyWord } from "../../api/music-163/cloudSongs";
@Options({
  name: "Header",
  components: {},
})
export default class Header extends Vue {
  public inputKeyWord = "";
  get settingOpen() {
    return SettingsModule.showSettings;
  }
  private toogleSideBar() {
    AppModule.ToggleSideBar(true);
  }

  private toogleSetting() {
    SettingsModule.ChangeSettingShow();
    MyPlayerModule.setPlayerFooterStatu(true);
  }

  private onkeyWordSearch(inputKeyWord: string) {
    console.log("key word" + inputKeyWord);
    getSongsByKeyWord({
      text: inputKeyWord,
      pageNo: 1,
      pageSize: 10,
    }).then((rsp: any) => {
      MyPlayerModule.refreshSongSmallCards(rsp.result.songs);
    });
    this.$router.push("player");
  }
}
</script>

<style lang="scss">
.header-container {
  width: 100%;
  height: 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.header-container .el-input {
  margin: 0 1rem;
}
.header-container .el-button {
  background: #5f5f65 !important;
  border: 1px solid #5f5f65 !important;
  color: #fff !important;
}

.header-search-input .el-input__inner {
  background-color: #5f5f65 !important;
  border: 1px solid #5f5f65 !important;
  color: #fff !important;
  border-radius: 20px !important;
}
</style>
