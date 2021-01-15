<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  name: "Main",
  components: {},
})
export default class Main extends Vue {
}
</script>

<style lang="scss">
.app-main {
  /* 50= navbar  50  */
  //   min-height: calc(100vh - 50px);
  //   width: 100%;
  //   position: relative;
  //   overflow: hidden;
}
</style>
