<template>
  <div id="app">
    <v-header></v-header>
    <v-searcher></v-searcher>
    <v-navigation></v-navigation>
  </div>
</template>

<script>
 import header from './components/header/header.vue';
 import searcher from './components/searcher/searcher.vue';
 import navigation from './components/navigation/navigation.vue';

 export default {
   components: {
     'v-header': header,
     'v-searcher': searcher,
     'v-navigation': navigation
   }
 };
</script>

<style>

</style>
