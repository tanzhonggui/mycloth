<template lang="html">
<div class="list">
   <ul class="img-list" v-for="items in 20" :key="items">
     <li @click='goCdetail'><Listitem ></Listitem></li>
   </ul>
</div>
</template>

<script>
import Listitem from '@/components/Listitem'

export default {
  components: {
    Listitem
  },
  props: {
    clothinfo: ''
  },
  // data() {
  //   clists:''
  // },
  methods: {
    goCdetail(){
      this.$emit('goCdetail');
    }
  },
  created: {

 }
}
</script>

<style lang="css">
.list {
  height: 1000px;
  padding-left:3%;
  padding-right: 3%;
  width: 94%;
  background-color: #ffffff;
  /* background-image: url('../../static/images/listback.jpg'); */
}

.list li{
  float: left;
  list-style-type:none;

}
</style>
