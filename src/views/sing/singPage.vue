<template>
  <el-table v-loading="loading" :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="日期" width="180"> </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="address" label="地址"> </el-table-column>
  </el-table>
  <audio id="play1" controls="controls" src="http://freetyst.nf.migu.cn/public/product06/2018/01/10/2013%E5%B9%B409%E6%9C%8824%E6%97%A5%E7%8E%AF%E6%96%B0%E6%97%A0%E9%99%90%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A519658%E9%A6%96/%E5%85%A8%E6%9B%B2%E8%AF%95%E5%90%AC/Mp3_64_22_16/Make%20That%20Move%282006%20Digital%20Remaster%29-Shalamar.mp3?channelid=03&k=f028eb1bae4c83e3&t=1610944327&msisdn=9687a0ac-1574-49b0-b0d3-3edb4ec2e2cb"></audio>
</template>

<style>
body {
  margin: 0;
}
</style>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
Options({ name: "SingPage", components: {} });
export default class SingPage extends Vue {
  public tableData = [
    {
      date: "2016-05-03",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    },
    {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    },
    {
      date: "2016-05-04",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    },
  ];
  public loading = true;
}
</script>
