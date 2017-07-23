<template>
  <div id="app">
    <v-header></v-header>
    <div id="searcher">
      I am searcher.
    </div>
    <div id="navigation">
      I am navigation.
    </div>
  </div>
</template>

<script>
 import header from './components/header/header.vue';

 export default {
   components: {
     'v-header': header
   }
 };
</script>

<style>

</style>
