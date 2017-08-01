<template>
  <div class="header">
    <div class="wrapper">
      <div class="left">
        <span><a href="">收藏本站</a></span>
        <span class="line-left">广东&nbsp;&nbsp;<span>[<a href="">切换省份</a>]</span></span>
        <a href=""><span class="line-left"><img src="./device_09-16.png" alt="" width="14" height="14"/>手机版</span></a>
        <a href=""><img alt="" src="./qrcode-16.png" width="14" height="14"/></a>
        <a href=""><img alt="" class="line-left" src="./weibo-sina-16.png"  width="14" height="14" /></a>
      </div>
      <div class="right">
        <span>您好！</span>
        <span>请<a class="blue" href="">登录注册</a> </span>
        <span class="line-left"><a href="">我的1号商城</a><span class="icon-more-down"></span></span>
        <span class="line-left"><a href="">收藏</a><span class="icon-more-down"></span></span>
        <span class="line-left"><a href="">帮助中心</a><span class="icon-more-down"></span></span>
        <span class="line-left"><a href="">商家入住通道</a><span class="icon-more-right"></span></span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
 export default {};
</script>

<style lang="scss" rel="stylesheet/scss">
 /* 在main.js中已经引入index.scss, 故不需要再每次都引入 */

 $fontSize: 14px;
 $height: 28px;
 $borderColor: #c2c2ba;
 $anchorColor: #0b3be9;

 .header {
   padding: 0 40px;
   border-bottom: solid 1px $borderColor;
   background-color: #f6f6eb;
   a:hover {
     color: red;
   }
   .wrapper {
     padding-left: 5px;
     font-size: $fontSize;
     height: $height;
     line-height: $height;
     border-left: solid 1px $borderColor;
     .left {
       display: inline-block;
       line-height: $height;
       img {
         /* 始终保持图像与文字剧中对齐 */
         vertical-align: top;
         margin-top: ($height - 16px) / 2;
       }
     }
     .right {
       display: inline-block;
       float: right;
       vertical-align: center;
       /* 图标字体样式 */
       .icon-more-down, .icon-more-right {
         &:before {
           display: inline-block;
           margin-left: 3px;
           color: #bbb;
           font-size: $fontSize - 4px;
         }
       }
     }
     .line-left {
       padding:0 5px;
       border-left: solid 1px $borderColor;
     }
     .blue {
       color: $anchorColor;
     }
   }
 }
</style>
