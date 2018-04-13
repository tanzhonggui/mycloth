<template lang="html">
<div class="list">
   <ul class="img-list" v-for="items in 20" :key="items">
     <li><Listitem></Listitem></li>
   </ul>
</div>
</template>

<script>
import Listitem from '@/components/Listitem'

export default {
  components: {
    Listitem
  },

  // data() {
  //   clists:''
  // },

  created: {

 }
}
</script>

<style lang="css">
.list {
  height: 1000px;
  padding: 0 5%;
  width: 90%;
  background-color: #ffffff;
}

.list li{
  float: left;
  list-style-type:none;
}
</style>
