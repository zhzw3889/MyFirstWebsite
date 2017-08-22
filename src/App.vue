<template>
  <div id="app">
    <v-header></v-header>
    <v-searcher></v-searcher>
    <v-mainNav></v-mainNav>
    <div class="main-display">
      <div class="main-wrapper">
        <v-navigation class="main-col1"></v-navigation>
        <div class="main-col2">
          <v-slideshow></v-slideshow>
          <div class="rest"></div>
        </div>
        <div class="main-col3">
        </div>
      </div>
    </div>
    <v-sidebar></v-sidebar>
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
 @import './common/sass/mixin.scss';

 .main-display {
   min-width: $min-width;
   background-color: #d3d8d8;
   .main-wrapper {
     display: flex;
     box-sizing: border-box;
     @include media-check;
     overflow: hidden;
     .main-col2 {
       flex: 1;
       .rest {
         margin-top: 1%;
         height: 34%;
       }
     }
     .main-col3 {
       width: 210px;
       background-color: green;
     }
   }
 }
</style>
