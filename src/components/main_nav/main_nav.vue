<template>
  <div class="main-nav">
    <div class="wrapper">
      <span class="topTitle"><span class="icon-list"></span>&nbsp;&nbsp;&nbsp;全部商品分类</span>
      <span class="flex item"><a href="">快GO超市</a></span>
      <span class="flex item"><a href="">快GO国际</a></span>
      <span class="flex item"><a href="">快GO会员</a></span>
      <span class="flex item"><a href="">品牌街</a></span>
      <span class="flex item"><a href="">电器城</a></span>
      <span class="flex item"><a href="">喵鲜生</a></span>
      <span class="flex item"><a href="">医药馆</a></span>
      <span class="flex item"><a href="">魅力惠</a></span>
      <span class="flex item"><a href="">飞猪旅行</a></span>
      <span class="flex item"><a href="https://www.suning.com">苏宁易购</a></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="scss" rel="stylesheet/scss">
 @import '../../common/sass/mixin.scss';

 $height: 36px;
 $fontSize: 16px;
 $menuWidth: 200px;

 .main-nav {
   height: $height;
   color: #fff;
   font-size: $fontSize;
   background-color: red;
   .wrapper {
     @include media-check;
     .pic1 {
       vertical-align: top;
       margin-top: ($height - 16px) / 2 - 1px;
     }
     .item {
       padding: 0 5px;
       a {
         color: #fff;
       }
     }
     .topTitle {
       display: inline-block;
       box-sizing: border-box;
       width: $menuWidth;
       padding-left: 20px;
       height: $height;
       line-height: $height;
       font-size: $fontSize;
       font-weight: bold;
       background-color: #b8052e;
     }
   }
 }
</style>
