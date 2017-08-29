<template>
  <div id="app">
    <v-header></v-header>
    <v-mainDisplay></v-mainDisplay>
    <v-sidebar class="sidebar"></v-sidebar>
    <v-toTop class="to-top"></v-toTop>
    <v-test></v-test>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
 import header from './components/basic/header/header.vue';
 import sidebar from './components/sidebar/sidebar.vue';
 import test from './components/test/test.vue';
 import footer from './components/basic/footer/footer.vue';
 import toTop from './components/to_top.vue';
 import mainDisplay from './components/mainDisplay/mainDisplay.vue';

 export default {
   components: {
     'v-header': header,
     'v-sidebar': sidebar,
     'v-test': test,
     'v-footer': footer,
     'v-toTop': toTop,
     'v-mainDisplay': mainDisplay
   }
 };
</script>

<style lang="scss" rel="stylesheet/scss">
 @import './common/sass/mixin.scss';

  .sidebar {
   @media only screen and (max-width: 800px) {
     display: none;
   }
 }
 .to-top {
   @media only screen and (max-width: 799px) {
     display: block;
   }
   @media only screen and (min-width: 800px) {
     display: none;
   }
 }
</style>
