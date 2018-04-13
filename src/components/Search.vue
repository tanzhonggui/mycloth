<template>
<div class="selects">
  <div class="logo">
    <img src="../../static/images/defate.jpg" alt="">
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
  width: 100%;
  background-color: #B3C0D1;
  color: #333;
  height: 60px;
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
  width: 120px;
  height: 60px;
  float: left;
  margin-left: 15%;
  margin-right: 15%;
}
.s-select {
  float: left;
  width: 50%;
}
</style>
