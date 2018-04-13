<template lang="html">
  <div class="itemcont">
   <div class="ipicture">
      <img :src="picsrc" alt="" :title="ititle">
   </div>
   <div class="ititle">
      {{ititle}}
   </div>
   <div class="iprice">
       <span>¥</span><span>{{iprice}}</span>
   </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      picsrc: "../../static/images/11.jpg",
      ititle: "精品女装五折起租",
      iprice: 50
    };
  },

  methods: {

  }
}
</script>

<style lang="css">
.itemcont {
  margin: 10PX;
  height: 300px;
  width: 220px;
  border: 1px solid #F8F8F8;
}

.ipicture {
  height: 200px;
  width: 200px;
  margin: 0 10px;
}

.ipicture img {
   width: 100%;
   height: 100%;

}
.ititle {
  height: 50px;
  width: 200px;
  margin: 0 10px;
  font-size: 20px;
  line-height: 50px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}

.iprice {
  color: #c30;
  font-size: 40px;
  line-height: 50px;
}
</style>
