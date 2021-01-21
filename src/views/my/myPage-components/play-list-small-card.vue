<template>
  <div class="small-card-container" @click.prevent="openPlayList(playList.id)">
    <div class="avatar-info">
      <img class="card-img" :src="playList.coverImgUrl" :alt="playList.name" />
    </div>
    <div class="play-list-info">
      <div class="playList-info-container">
        <span>{{ playList.name }}</span>
      </div>
      <div class="author-info-container">
        <em class="el-icon-document-checked"></em>
        <!-- <span>{{ playList?.artists[0]?.name }}</span> -->
        <span>{{ playList?.trackCount }}首,</span>
        <span>播放{{ playList?.playCount }}次,</span>
        <span>by{{ playList?.creator.nickname }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
// import { getplayListUrl } from "@/api/music-163/cloudplayLists";
import { getSongsByPlayListId } from "@/api/music-163/cloudSongs";
import { MyPlayerModule } from "@/store/modules/player";
import { SettingsModule } from "@/store/modules/setting";
import _ from "lodash";
import { Options, Vue } from "vue-class-component";

@Options({
  name: "playListSmallCard",
  props: {
    playList: {
      name: "test",
      artists: [{ name: "test" }],
      coverImgUrl:
        "http://p3.music.126.net/7WfDn7J-1aF7Csv8O5wuzg==/1892259511511858.jpg",
    },
  },
})
export default class PlayListSmallCard extends Vue {
  public playListInfo = {
    name: "test",
    artists: [{ name: "test" }],
  };
  private openPlayList(id: number) {
    getSongsByPlayListId(id).then((rsp: any) => {
      //   const playList = _.map(rsp.playlist.tracks, (item: any) => {
      //     return item;
      //   });

      MyPlayerModule.refreshSongSmallCards(rsp.playlist.tracks);
      this.$router.push("player");
    });
  }
  //   private openPlayer() {
  //     SettingsModule.ChangeSettingShow();
  //     MyPlayerModule.setPlayerFooterStatu(true);
  //     MyPlayerModule.setPlayerStatu(true);
  //   }
}
</script>
<style lang="scss" scoped>
.small-card-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.playList-info-container {
  display: flex;
  color: white;
  font-size: 1rem;
  justify-content: flex-start;
  text-align: left;
  align-items: center;
  height: 65%;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.author-info-container {
  display: flex;
  color: #796f6f;
  font-size: 0.9rem;
  text-align: left;
  height: 35%;
  align-items: center;
}
.el-icon-document-checked {
  color: #796f6f;
}

.card-img {
  width: 2.5rem;
  height: 2.5rem;
}

.play-list-info {
  margin-left: 0.5rem;
}
</style>
