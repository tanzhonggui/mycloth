<template>
  <div id="app">
    <Head @gocart='gocart' @gohome='gohome'></Head>
    <router-view/>
  </div>
</template>

<script>
import Head from '@/components/Head'
export default {
  name: 'App',
  components:{
    Head
  },
  methods: {
    gocart(){
      this.$router.push({ name: 'buyCart' });
    },
    gohome(){
      this.$router.push({ name: 'Home' });
    }
  }
}
</script>
<style>
#app {
  overflow-x:hidden;
}

</style>
