<template>
  <div class="main-display">
    <v-searcher class="searcher"></v-searcher>
    <v-mainNav></v-mainNav>
    <div class="main-cols">
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
  </div>
</template>

<script type="text/ecmascript-6">
 import searcher from '../searcher/searcher.vue';
 import mainNav from '../mainNav/mainNav.vue';
 import navigation from '../navigation/navigation.vue';
 import slideshow from '../slideshow/slideshow.vue';

 export default {
   components: {
     'v-searcher': searcher,
     'v-mainNav': mainNav,
     'v-slideshow': slideshow,
     'v-navigation': navigation
   }
 };
</script>

<style lang="scss" rel="stylesheet/scss">
 @import '../../common/sass/mixin.scss';

 .main-cols {
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
         height: 126px;
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
