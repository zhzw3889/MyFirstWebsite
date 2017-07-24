<template>
  <div id="app">
    <v-header></v-header>
    <v-searcher></v-searcher>
    <div id="navigation">
      I am navigation.
    </div>
  </div>
</template>

<script>
 import header from './components/header/header.vue';
 import searcher from './components/searcher/searcher.vue';

 export default {
   components: {
     'v-header': header,
     'v-searcher': searcher
   }
 };
</script>

<style>

</style>
