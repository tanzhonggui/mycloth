<template >
  <div class="header">
     <div class="weizhi">当前位置：</div>
     <div class="location">
        <!-- <Areaselect :location='value'></Areaselect> -->
     </div>
     <div class="tips">{{userId}}</div>
     <div class="tips">消息</div>
     <div class="tips">购物车</div>
     <div class="tips">收藏的宝贝</div>
  </div>
</template>

<script>
// import Areaselect from '@/components/Areaselect'

export default {
  components: {
    // Areaselect
  },

  data() {
    return{
      loginState: 0,
      userId: "大壮",
      location: "北京"
    };
  },

  computed: {

  },

  methods: {
     function(){}
  }
}
</script>

<style lang="scss">
.header {
  display: flex;
  width: 90%;
  padding: 0 5%;
  background-color: #f2f2f2;
  color: #333;
  text-align: center;
  height: 30px;
  line-height: 30px;
}

.weizhi {
  float: left;
  width: 7%;

}
.location {
  width: 63%;
  text-align: left;
  float: right;
}
.tips {
  width: 80px;
  float: right;
  margin: 0 3px;
}
</style>
