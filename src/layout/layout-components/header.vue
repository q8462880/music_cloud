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
      v-model="input2"
    >
    </el-input>
    <el-button size="medium " icon="el-icon-setting" round></el-button>
  </div>
</template>

<script lang="ts">
import { AppModule } from "@/store/modules/app";
import { Options, Vue } from "vue-class-component";
@Options({
  name: "Header",
  components: {},
})
export default class Header extends Vue {
  public input2 = "";
  private toogleSideBar() {
    AppModule.ToggleSideBar(true);
  }
}
</script>

<style lang="scss">
.header-container {
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
