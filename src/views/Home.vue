<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">

import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
