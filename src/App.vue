<template>
  <div id="app">
    <v-header></v-header>
    <v-mainDisplay></v-mainDisplay>
    <v-goodsList
      v-for="(item, index) in items"
      v-bind:title="item.message"
      v-bind:index="index"
      v-bind:key="item.id"
      v-bind:image="item.image"
    ></v-goodsList>
    <v-sidebar class="sidebar"></v-sidebar>
    <v-toTop class="to-top"></v-toTop>
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
 import goodsList from './components/goodsList/goodsList.vue';

 export default {
   data() {
     return {
       items: [
         {
           id: 1,
           message: '电脑数码',
           image: require('./components/goodsList/digitalProducts/1-9.jpg')
         },
         {
           id: 2,
           message: '吃货天堂',
           image: require('./components/goodsList/digitalProducts/2-9.jpg')
         },
         {
           id: 3,
           message: '运动达人',
           image: require('./components/goodsList/digitalProducts/3-9.jpg')
         },
         {
           id: 4,
           message: '家有宝宝',
           image: require('./components/goodsList/digitalProducts/4-9.jpg')
         },
         {
           id: 5,
           message: '书虫天地',
           image: require('./components/goodsList/digitalProducts/5-9.jpg')
         },
         {
           id: 6,
           message: '有车人士',
           image: require('./components/goodsList/digitalProducts/6-9.jpg')
         },
         {
           id: 7,
           message: '生活旅行',
           image: require('./components/goodsList/digitalProducts/7-9.jpg')
         },
         {
           id: 8,
           message: '其他百货',
           image: require('./components/goodsList/digitalProducts/8-9.jpg')
         }
       ]
     };
   },
   components: {
     'v-header': header,
     'v-sidebar': sidebar,
     'v-test': test,
     'v-footer': footer,
     'v-toTop': toTop,
     'v-mainDisplay': mainDisplay,
     'v-goodsList': goodsList
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
