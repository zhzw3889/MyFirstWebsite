<template>
  <div class="goodsList">
    <div class="goodsList-wrapper">
      <ul>
        <h1>{{title}}</h1>
        <div class="goods-col1">
          <a href=""><img alt="" :src="image"/></a>
        </div>
        <div class="goods-col2">
          <li v-for="item in items">
            <a href="">
              <span>{{item.info}}</span>
              <img alt="" :src="item.image"/>
            </a>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
 export default {
   props: [
     'title',
     'image'
   ],
   data() {
     return {
       items: [
         {
           info: '各式电脑',
           image: require('./digitalProducts/1-1.jpg')
         },
         {
           info: '外设装备',
           image: require('./digitalProducts/1-2.jpg')
         },
         {
           info: '平板电脑',
           image: require('./digitalProducts/1-3.jpg')
         },
         {
           info: '开学采购',
           image: require('./digitalProducts/1-4.jpg')
         },
         {
           info: '娱乐影音',
           image: require('./digitalProducts/1-5.jpg')
         },
         {
           info: '摄影摄像',
           image: require('./digitalProducts/1-6.jpg')
         },
         {
           info: '3C新品',
           image: require('./digitalProducts/1-7.jpg')
         },
         {
           info: '手机新品',
           image: require('./digitalProducts/1-8.jpg')
         }
       ]
     };
   }
 };
</script>

<style lang="scss" rel="stylesheet/scss">
 @import '../../common/sass/mixin.scss';

 $fontSize: 14px;
 $height: 28px;
 $fontColor: #7e8c8d;
 $borderColor: #c2c2ba;

 .goodsList {
   min-width: $min-width;
   padding-top: 10px;
   background-color: #d3d8d8;
   .goodsList-wrapper {
     @include media-check;
     overflow: hidden;
     h1 {
       margin: 10px 0 10px 0;
       padding-left: 10px;
       border-left: 5px solid red;
       font-size: $fontSize + 5px;
       background-color: #d3d8d8;
     }
     .goods-col1, .goods-col2 {
       height: 325px;
     }
     .goods-col1 {
       float: left;
       width: 370px;
       @media only screen and (max-width: 1360px) {
         width: 360px;
       };
       @media only screen and (max-width: 1210px) {
         width: 320px;
       };
       a {
         display: block;
         width: 100%;
         height: 100%;
         img {
           display: block;
           width: 100%;
           height: 100%;
         }
       }
     }
     .goods-col2 {
       float: right;
       margin-left: 5px;
       width: 875px;
       @media only screen and (max-width: 1360px) {
         width: 835px;
       };
       @media only screen and (max-width: 1210px) {
         width: 675px;
       };
       li {
         float: left;
         position: relative;
         margin-right: 3px;
         margin-top: 2px;
         width: 215px;
         @media only screen and (max-width: 1360px) {
           width: 205px;
         };
         @media only screen and (max-width: 1210px) {
           width: 165px;
         };
         height: 160px;
         background-color: #fff;
         a {
           display: block;
           max-width: 100%;
           max-height: 100%;
           span {
             position: absolute;
             left: 10%;
             top: 10%;
           }
           img {
             position: absolute;
             right: 5%;
             bottom: 5%;
             width: 55%;
             display: block;
           }
         }
       }
     }
   }
 }
</style>
