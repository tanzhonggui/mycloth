<template lang="html">
<div class="content">
  <div class="aside"></div>
  <div class="main">
  <Pictruepic></Pictruepic>
  </div>
  <div class="contents">
    <div class="tabs">
      <h3>在线挑衣</h3>
      挑中好衣，迅速下单
    </div>
    <div class="tabs">
      <h3>送货上门</h3>
      同城配货，方便快捷
    </div>
    <div class="erweima">
      <img src="../../static/images/2weima.jpg" alt="">
    </div>
  </div>
</div>
</template>

<script>
import Pictruepic from '@/components/Pictruepic'

export default {

components:{
  Pictruepic
},

data() {
  return{
    picsrc:{
      type: String,
      default: "../../static/images/defate.jpg"
    }
  };
}
}
</script>

<style lang="css">
.content {
  height: 300px;
  width: 100%;
  padding: 0 5%;
}

.aside {
  float: left;
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  height: 300px;
  width: 20%;
}

.main {
  float: left;
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  height:300px;
  overflow: hidden;
  width: 50%;
}

.contents {
  height: 300px;
  width: 20%;
  float: left;
  background-color: #F8F8F8;
}

.erweima{
  height: 180px;
  width: 200px;
  margin: 5px 0 0 5px;
}
.erweima img{
  height: 100%;
  width: 100%;

}

.tabs {
  text-align: center;
  height: 100px;
  width: 120px;
  float: left;
  margin-left: 10px;
  margin-top: 10px;
  background-color: #ffffff;
  font-size: 11px;
  color: #999;
}

.tabs h3{
  color: #333;
}

</style>
