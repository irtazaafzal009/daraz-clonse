<template>
  <div id="app">
    <primaryNav></primaryNav>
    <secondryNav></secondryNav>
    <router-view></router-view>
    <productListing></productListing>
    <dfooter></dfooter>
  </div>
</template>
<script>

import productListing from './views/mainProductListing'
import primaryNav from './components/headers/primaryNav'
import secondryNav from './components/headers/secondaryNav'
import dfooter from './components/footers/footer'

export default {
  name:'App',
  components : {
    productListing,
    primaryNav,
    secondryNav,
    dfooter
  },
  data(){
    return {

    }
  }
}
</script>
<style>
  @import './assets/styles/main.css';
</style>
<style scoped>

</style>
