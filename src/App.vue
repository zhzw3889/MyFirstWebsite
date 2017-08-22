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
          <div class="main-col2-extend">
            <a class="main-col2-extend-1" href="">
              <img alt="" src="./1.png"/>
            </a>
            <span></span>
            <a class="main-col2-extend-2" href="">
              <img alt="" src="./2.png"/>
            </a>
          </div>
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
     @include display-flex;
     box-sizing: border-box;
     @include media-check;
     overflow: hidden;
     .main-col2 {
       @include flex-1;
       .main-col2-extend {
         margin-top: 6px;
         height: 124px;
         @include display-flex;
         span {
           width: 6px;
         }
         .main-col2-extend-1, .main-col2-extend-2 {
           @include flex-1;
           height: 100%;
           img {
             height: 100%;
             width: 100%;
           }
         }
       }
     }
     .main-col3 {
       width: 210px;
       background-color: green;
     }
   }
 }
</style>
