<template>
<div class="selects">
  <div class="logo">
    <img src="../../static/images/logo.png" alt="">
  </div>
  <div class="s-select">
    <input type="text" name="" value="" placeholder="搜索">
    <button class="" >
      搜索
    </button>
  </div>
</div>
</template>

<script>

export default {
  data() {
    return{

    };
  },

  computed: {

  },

  methods: {
     function(){}
  }
}
</script>

<style lang="css">
.selects {
  width: 90%;
  padding-left:5%;
  padding-right: 5%;
  background-color: #ffffff;
  color: #333;
  height: 100px;
  line-height: 60px;
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
  margin-right: 15%;
}
.s-select {
  float: left;
  width: 50%;
}
</style>
