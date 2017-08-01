<template>
  <div id="app">
    <v-header></v-header>
    <v-searcher></v-searcher>
    <v-navigation></v-navigation>
    <v-sidebar></v-sidebar>
    <v-test></v-test>
  </div>
</template>

<script>
 import header from './components/header/header.vue';
 import searcher from './components/searcher/searcher.vue';
 import navigation from './components/navigation/navigation.vue';
 import sidebar from './components/sidebar/sidebar.vue';
 import test from './components/test/test.vue';

 export default {
   components: {
     'v-header': header,
     'v-searcher': searcher,
     'v-navigation': navigation,
     'v-sidebar': sidebar,
     'v-test': test
   }
 };
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
