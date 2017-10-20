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
          <div class="main-col3 main-col3-row1">
            <div class="logo-hello">
            <a href=""><img src="./logo-60.jpg" alt="" /></a></br>
            <span>汪汪，你好</span>
            </div>
            <div class="login-new">
            <button class="button login">登录</button>
            <button class="button new">新人福利</button>
            </div>
          </div>
          <div class="main-col3 main-col3-row2">
            <div class="main-col3-row2-sub1">
              <a href=""><span><i>[必看]</i>三星Note 8简评：霸气全面屏，傲视同级双摄</span></a></br>
              <a href=""><span><i>[关注]</i>不趋同，手机党的2017年个性潮流之选</span></a>
            </div>
            <div class="main-col3-row2-sub2">
              <a href=""><span><i>[必看]</i>三星Note 8简评：霸气全面屏，傲视同级双摄</span></a></br>
              <a href=""><span><i>[关注]</i>不趋同，手机党的2017年个性潮流之选</span></a>
            </div>
          </div>
          <div class="main-col3 main-col3-row3">
            <a class="other-service"><i class="icon-mobile2"></i></br><span>话费</span></a>
            <a class="other-service"><i class="icon-droplet"></i></br><span>水电煤</span></a>
            <a class="other-service no-right-border"><i class="icon-card"></i></br><span>加油卡</span></a>
            <a class="other-service no-bottom-border"><i class="icon-film"></i></br><span>电影票</span></a>
            <a class="other-service no-bottom-border"><i class="icon-train"></i></br><span>火车票</span></a>
            <a class="other-service no-right-border no-bottom-border"><i class="icon-football"></i></br><span>足球</span></a>
          </div>
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

 $buttonColor: #FF0036;
 $fontColor: #333;
 $bgColor: #d3d8d8;

 .main-cols {
   min-width: $min-width;
   background-color: $bgColor;
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
       margin-left: 3px;
       width: 207px;
       background-color: $bgColor;
       /* 三行共用样式 */
       .main-col3 {
         width: 100%;
         background-color: #f6f6f6;
       }
       /* height总值为13×30=390, 也为155+1+90+1+143 */
       .main-col3-row1 {
         height: 155px;
         text-align: center;
         .logo-hello {
           display: inline-block;
           margin-bottom: 10px;
           img {
             margin: 10px 0;
             border: 2px solid $buttonColor;
             border-radius: 50%;
           }
           span {
             color: $fontColor;
             font-size: 14px;
           }
         }
         .login-new {
           .button {
             border: none;
             width: 70px;
             height: 30px;
             color: #FFF;
             font-weight: bold;
             outline: none;
             background-color: $buttonColor;
             &:hover {
               cursor: pointer;
             }
           }
           .new {
             color: $fontColor;
             border: 1px solid $fontColor;
             background-color: #fff;
             &:hover {
               color: $buttonColor;
               border: 1px solid $buttonColor;
             }
           }
         }
       }
       .main-col3-row2 {
         box-sizing: border-box;
         margin-top: 1px;
         padding: 5px;
         height: 90px;
         overflow: hidden;
         .main-col3-row2-sub1, .main-col3-row2-sub2 {
           box-sizing: border-box;
           padding: 5px;
           width: 100%;
           height: 100%;
           font-size: 14px;
           line-height: 15px;
           a {
             color: $fontColor;
             &:hover {
               color: $buttonColor;
             }
           }
           span {
             display: inline-block;
             box-sizing: border-box;
             padding-top: 5px;
             i {
               margin-right: 5px;
               font-style: normal;
               color: red;
             }
           }
         }
       }
       .main-col3-row3 {
         margin-top: 1px;
         height: 143px;
         /* 去除多余间隔 */
         font-size: 0;
         .other-service {
           box-sizing: border-box;
           display: inline-block;
           width: 69px;
           height: 71px;
           font-size: 14px;
           text-align: center;
           border-right: 1px solid $bgColor;
           border-bottom: 1px solid $bgColor;
           color: $fontColor;
           /* background-color: orange; */
           &:hover {
             cursor: pointer;
             color: $buttonColor;
           }
           i {
             /* 垂直剧中方案 */
             line-height: 48px;
             font-size: 28px;
           }
           span {
           }
         }
         .no-right-border {
           border-right: none;
         }
         .no-bottom-border {
           border-bottom: none;
         }
       }
     }
   }
 }
</style>
