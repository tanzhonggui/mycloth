<template>
  <el-carousel :interval="5000"  height="300px">
    <el-carousel-item v-for="items in 6" :key="items">
      <img :src="imgSrc(items)" alt="">
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  // data() {
  //   return{
  //     items:{
  //       type:number,
  //       default:0
  //     }
  //   }
  // },
  methods : {
    imgSrc(items){
      return '../../static/images/'+items+'.jpg';
    }
  }

}
</script>
<style>
  .el-carousel{
    margin: 0;
    padding: 0;
  }
  .el-carousel__item  {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 270px;
    margin: 0;
  }

  .el-carousel__item img {
    height: 400px;
    width: 800px;
  }
  .el-carousel__item:nth-child(2n) {
    /* background-color: #99a9bf; */
  }

  .el-carousel__item:nth-child(2n+1) {
    /* background-color: #d3dce6; */
  }
</style>
