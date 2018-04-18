<template >
<div class="">
  <div class="header">
     <div class="weizhi" @click='gohome'>首页</div>
     <div class="location">
        <!-- <Areaselect :location='value'></Areaselect> -->
     </div>
     <div class="tips">{{userId}}</div>
     <div class="tips">消息</div>
     <div class="tips" ><a @click='gocart'>购物车</a></div>
     <div class="tips">收藏的宝贝</div>
  </div>
  <div class="selects">
    <div class="logo">
      <img src="../../static/images/logo.jpg" alt="">
    </div>
    <div class="s-select">
      <input class="search" type="text" name="" value="" placeholder="请输入商品名称">
      <div class="searcher"><a >搜索</a></div>
    </div>
  </div>
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
     gocart(){
       this.$emit('gocart');
     },
     gohome(){
       this.$emit('gohome');
     }
  }
}
</script>

<style lang="scss">
.header {
  display: flex;
  width: 90%;
  padding: 0 5%;
  background-color: #f5f5f5;
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

.selects {
  width: 76%;
  padding-left:12%;
  padding-right: 12%;
  background-color: #ffffff;
  color: #333;
  height: 100px;
  line-height: 60px;
  border-bottom: 2px solid #EE0000;
}

.span{
  text-align: right;
}

.logo img {
  width: 100%;
  height: 100%;
}

.logo {
  width: 250px;
  height: 100px;
  float: left;
  margin-right: 50px;
}
.s-select {
  float: left;
  width: 50%;
  margin-top: 30px;
}

.search{
  border: 2px solid #EE0000;
  height: 40px;
  width: 400px;
  float: left;
  font-size: 17px;
}
input:focus{outline:none;}

.searcher{
  height: 46px;
  width: 80px;
  font-size: 20px;
  background-color: #EE0000;
  color: #fff;
  float: left;
  text-align: center;
  line-height: 45px;
}
</style>
