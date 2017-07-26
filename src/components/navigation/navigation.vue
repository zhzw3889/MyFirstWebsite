<template>
  <div class="navigation">
    <div class="head">
      <span class="topTitle"><img class="pic1" alt="" src="./main_menu-16.png" />&nbsp;&nbsp;&nbsp;全部商品分类</span>
      <span class="flex item"><a href="">快GO超市</a></span>
      <span class="flex item"><a href="">快GO国际</a></span>
      <span class="flex item"><a href="">快GO会员</a></span>
      <span class="flex item"><a href="">品牌街</a></span>
      <span class="flex item"><a href="">电器城</a></span>
      <span class="flex item"><a href="">喵鲜生</a></span>
      <span class="flex item"><a href="">医药馆</a></span>
      <span class="flex item"><a href="">魅力惠</a></span>
      <span class="flex item"><a href="">飞猪旅行</a></span>
      <span class="flex item"><a href="">苏宁易购</a></span>
    </div>
    <div class="container">
      <div class="left">
        <ul>
          <li><a href="#">女装/内衣</a></li>
          <li><a href="#">男装/运动户外</a></li>
          <li><a href="#">女鞋/男鞋/箱包</a></li>
          <li><a href="#">化妆品/个人护理</a></li>
          <li><a href="#">腕表/珠宝首饰/眼镜</a></li>
          <li><a href="#">手机/数码/电脑办公</a></li>
          <li><a href="#">母婴玩具</a></li>
          <li><a href="#">零食/进口食品/茶酒</a></li>
          <li><a href="#">生鲜水果</a></li>
          <li><a href="#">大家电/生活电器</a></li>
          <li><a href="#">家具建材</a></li>
          <li><a href="#">汽车/配件/用品</a></li>
          <li><a href="#">家纺/家饰/鲜花</a></li>
          <li><a href="#">医药保健</a></li>
          <li><a href="#">厨具/收纳/宠物</a></li>
          <li><a href="#">图书音像</a></li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
 export default {};
</script>

<style lang="scss" rel="stylesheet/scss">
 $height: 36px;
 $fontSize: 16px;
 $padding: 0 25px;

 .navigation {
   .head {
     height: $height;
     color: #fff;
     font-size: $fontSize;
     background-color: red;
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
       margin: $padding;
       padding: 0 26px 0 20px;
       height: $height;
       line-height: $height;
       font-size: $fontSize;
       font-weight: bold;
       background-color: #b8052e;
     }
   }
   .container {
     background-color: #d3d8d8;
     height: 700px;
     .left {
       float: left;
       & li {
         margin: $padding;
         padding: $padding;
         height: $height - 2px;
         line-height: $height - 2px;
         font-size: $fontSize - 2px;
         background: url('./arrow_lift-right-12.png') #e2e5e5 no-repeat right;
         z-index: 3; /* 方便设置右侧悬浮层 */
         color: #000;
         &:hover {
           a {
             font-weight: bold;
             color: #E4393C;
           }
           background: #fff;
         }
       }
       /* background-color: yellow; */
     }
   }
 }
</style>
