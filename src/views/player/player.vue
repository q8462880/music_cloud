<template
  ><div class="infinite-list-wrapper" style="overflow:auto">
    <ul
      class="song-list"
      v-infinite-scroll="load"
      infinite-scroll-disabled="disabled"
    >
      <li
        v-for="songInfo in songInfoList"
        class="song-list-item"
        :key="songInfo.id"
      >
        <SongSmallCard :songInfo="songInfo"></SongSmallCard>
      </li>
    </ul>
    <p v-if="loading">加载中...</p>
    <p v-if="noMore">没有更多了</p>
  </div>
</template>

<script lang="ts">
import { MyPlayerModule } from "@/store/modules/player";
import { Options, Vue } from "vue-class-component";
import SongSmallCard from "./player-components/song-small-card.vue";
@Options({
  name: "Player",
  components: {
    SongSmallCard,
  },
})
export default class Player extends Vue {
  public count = 10;
  public loading = false;
  get songInfoList() {
    return MyPlayerModule.songSmallCardInfo;
  }
  get noMore() {
    return this.count >= 20;
  }
  get disabled() {
    return this.loading || this.noMore;
  }
  private load() {
    this.loading = true;
    setTimeout(() => {
      this.count += 2;
      this.loading = false;
    }, 2000);
  }
}
</script>

<style lang="scss" scoped>
.song-list {
  padding-inline-start: 0;
  margin-block: 0;
  list-style-type: none;
}

.song-list-item {
  height: 3rem;
  border-bottom: 1px solid #696262;
}
</style>
