<template>
  <div id="app">
    <v-header></v-header>
    <v-searcher></v-searcher>
    <v-mainNav></v-mainNav>
    <div class="main-display">
      <v-navigation class="main_col1"></v-navigation>
      <div class="main_col2">
        <v-slideshow></v-slideshow>
      </div>
      <div class="main_col3">

      </div>
    </div>
    <v-sidebar></v-sidebar>
    <v-test class="test"></v-test>
    <v-footer></v-footer>
  </div>
</template>

<script>
 import header from './components/header/header.vue';
 import searcher from './components/searcher/searcher.vue';
 import navigation from './components/navigation/navigation.vue';
 import slideshow from './components/slideshow/slideshow.vue';
 import sidebar from './components/sidebar/sidebar.vue';
 import test from './components/test/test.vue';
 import mainNav from './components/main_nav/main_nav.vue';
 import footer from './components/footer/footer.vue';

 export default {
   components: {
     'v-header': header,
     'v-searcher': searcher,
     'v-navigation': navigation,
     'v-slideshow': slideshow,
     'v-sidebar': sidebar,
     'v-test': test,
     'v-mainNav': mainNav,
     'v-footer': footer
   }
 };
</script>

<style lang="scss" rel="stylesheet/scss">
 .main-display {
   display: flex;
   width: 100%;
   margin: 0 auto;
   background-color: #d3d8d8;
   .main_col1 {

   }
   .main_col2 {
     flex: 1;
   }
   .main_col3 {
     width: 250px;
     background-color: green;
   }
   .test {
     background-color: yellow;
   }
 }
</style>
