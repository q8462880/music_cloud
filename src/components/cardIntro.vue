<template>
  <el-card :body-style="{ padding: '0px' }">
    <img class="card-img" :src="info.url" :alt="info.name" />
    <div class="card-desc">
      <span>{{ info.name }}</span>
    </div>
  </el-card>
</template>

<script lang="ts">
export interface CartInfo {
  name: string;
  url: string;
}
import { Options, Vue } from "vue-class-component";
@Options({
  name: "CardIntro",
  props: {
    info: {},
  },
})
export default class CardIntro extends Vue {

}
</script>

<style lang="scss">
.card-img {
  width: 100%;
  height: 8rem;
}

.card-desc {
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-card__body {
  /* padding: 20px; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
