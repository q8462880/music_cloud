<template>
  <div class="infinite-list-wrapper" style="overflow:auto">
    <ul
      class="song-list"
      v-infinite-scroll="load"
      infinite-scroll-disabled="disabled"
    >
      <li
        v-for="playList in playLists"
        class="song-list-item"
        :key="playList.id"
      >
        <!-- <MylikeSmallCard></MylikeSmallCard> -->
        <PlayListSmallCard :playList="playList"></PlayListSmallCard>
      </li>
    </ul>
    <p v-if="loading">加载中...</p>
    <p v-if="noMore">没有更多了</p>
  </div>
</template>

<script lang="ts">
import { MyPlayerModule } from "@/store/modules/player";
import { UserModule } from "@/store/modules/user";
import { Options, Vue } from "vue-class-component";
import PlayListSmallCard from "./myPage-components/play-list-small-card.vue";

@Options({
  name: "Mypage",
  components: {
    PlayListSmallCard,
  },
})
export default class MyPage extends Vue {
  private count = 10;
  private loading = false;
  get playLists() {
    return UserModule.playLists;
  }

  get profile() {
    return UserModule.profile;
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

  created() {
    // if (!this.roles.includes("admin")) {
    //   this.currentRole = "editor-dashboard";
    // }
  }
}
</script>

<style lang="scss">
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
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
