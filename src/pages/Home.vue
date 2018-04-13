<template>
<div class="home-container">
  <Head></Head>
  <Search></Search>
  <Content></Content>
  <List></List>
</div>
</template>

<script>
import Head from '@/components/Head'
import Search from '@/components/Search'
import Content from '@/components/Content'
import List from '@/components/List'
import axios from 'axios'
import data from "../../data.json"

export default {
  components: {
    Head,
    Content,
    List,
    Search
  },

  data(){ 　　　　　
    　return{　userinform: ''}
  　　　　},
  mounted(){
 　　this.userinform = this.data,
     console.log(this.userinform)
　　},

  methods: {
     showdata: function() {
       return this.userinform
     }
  }
}
</script>

<style>
.home-container {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
