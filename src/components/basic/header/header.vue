<template>
  <div class="header">
    <div class="wrapper">
      <div class="left-part">
        <span>汪汪，欢迎来快GO！</span>
        <!-- 移动版，以后再加！ -->
        <a href=""><span class="line-left"><span class="icon-mobile"></span> 移动版</span></a>
      </div>
      <div class="right-part">
        <router-link class="notLogin" to="/login">您好！请登录</router-link>
        <router-link class="notLogin register" to="/register">免费注册</router-link>
        <span v-show="login">{{membership}}, 您好! 欢迎回来！</span>
        <a class="line-left" href="">我的订单<span class="icon-more-down"></span></a>
        <a class="line-left" href="">我的快GO<span class="icon-more-down"></span></a>
        <a class="line-left" href=""><span class="icon-star-o"></span> 收藏夹<span class="icon-more-down"></span></a>
        <a class="line-left" href=""><span class="icon-shopping-cart"></span> 购物车<span class="icon-more-down"></span></a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
 export default {
   data () {
     return {
       /* 登录之后显示，暂定false */
       login: false,
       /* 登录之后隐藏 */
       notLogin: true,
       /* 用户名显示 */
       membership: '悟空'
     };
   }
 };
</script>

<style lang="scss" rel="stylesheet/scss">
 /* 在main.js中已经引入index.scss, 故不需要再每次都引入 */
 @import '../../../common/sass/mixin.scss';

 $fontSize: 14px;
 $height: 28px;
 $fontColor: #7e8c8d;
 $borderColor: #c2c2ba;

 .header {
   min-width: $min-width;
   border-bottom: solid 1px $borderColor;
   color: $fontColor;
   background-color: #f6f6eb;
   transition: all 5s;
   .wrapper {
     @include media-check;
     font-size: $fontSize;
     height: $height;
     line-height: $height;
     a:hover {
       color: $anchorColor;
     }
     .register {
       margin: 0 5px;
       color: $anchorColor;
     }
     .left-part {
       display: inline-block;
       margin-left: 20px;
       height: $height;
       line-height: $height;
       .icon-mobile {
         &:before {
           color: $anchorColor;
         }
       }
     }
     .right-part {
       display: inline-block;
       margin-right: 40px;
       float: right;
       height: $height;
       line-height: $height;
       /* 图标字体样式, 翻转效果 */
       .icon-more-down, .icon-more-right {
         &:before {
           display: inline-block;
           margin-left: 3px;
           color: $fontColor;
           font-size: $fontSize - 4px;
           /* 过渡效果 */
           @include transition(All 0.4s ease-in-out);
         }
       }
       .icon-shopping-cart, .icon-star-o {
         &:before {
           color: $anchorColor;
         }
       }
     }
     .line-left {
       padding:0 5px;
       border-left: solid 1px $borderColor;
       &:hover {
         .icon-more-down, .icon-more-right {
           &:before {
             color: $anchorColor;
             @include rotate(180deg);
           }
         }
       }
     }
   }
 }
</style>
