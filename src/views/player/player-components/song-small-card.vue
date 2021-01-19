<template>
  <div class="small-card-container" @click.prevent="playSong(songInfo.id)">
    <div class="left-info">
      <div class="song-info-container">
        <span>{{ songInfo.name }}</span>
      </div>
      <div class="author-info-container">
        <span>{{ songInfo.artists[0].name }}</span>
      </div>
    </div>
    <div class="right-info button-container">
      <em class="el-icon-more"></em>
    </div>
  </div>
</template>
<script lang="ts">
import { getSongUrl } from "@/api/music-163/cloudSongs";
import { MyPlayerModule } from "@/store/modules/player";
import { SettingsModule } from "@/store/modules/setting";
import { Options, Vue } from "vue-class-component";
@Options({
  name: "SongSmallCard",
  props: {
    songInfo: {},
  },
})
export default class SongSmallCard extends Vue {
  private playSong(contentId: string) {
    getSongUrl(contentId).then((data: any) => {
      MyPlayerModule.setCurrentPlaySongUrl(data.data[0].url);
      this.openPlayer();
    });
  }

  private openPlayer() {
    SettingsModule.ChangeSettingShow();
    MyPlayerModule.setPlayerFooterStatu(true);
    MyPlayerModule.setPlayerStatu(true);
  }
}
</script>
<style lang="scss" scoped>
.small-card-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-info {
  /* color: white; */
}

.song-info-container {
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

.right-info.button-container {
  color: #796f6f;
}
</style>
