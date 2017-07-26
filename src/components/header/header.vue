<template>
  <div class="header">
    <div class="wrapper">
      <div class="left">
        <span><a href="">收藏本站</a></span>
        <span class="line-left">广东&nbsp;&nbsp;<span>[<a href="">切换省份</a>]</span></span>
        <a href=""><span class="line-left"><img src="./device_09-16.png" alt="" />手机版</span></a>
        <a href=""><img alt="" src="./qrcode-16.png"/></a>
        <a href=""><img alt="" class="line-left" src="./weibo-sina-16.png"/></a>
      </div>
      <div class="right">
        <span>您好！</span>
        <span>请<a class="blue" href="">登录注册</a> </span>
        <span class="line-left"><a href="">我的1号商城</a></span>
        <span class="line-left"><a href="">收藏夹  <img alt="" src="./arrow-down-8.png"/></a></span>
        <span class="line-left"><a href="">帮助中心  <img alt="" src="./arrow-down-8.png"/></a></span>
        <span class="line-left"><a href="">商家入住通道</a>  <img alt="" src="./arrow-right-8.png"/></span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
 export default {};
</script>

<style lang="scss" rel="stylesheet/scss">
 $fontSize: 12px;
 $height: 28px;
 $borderColor: #c2c2ba;
 $anchorColor: #0b3be9;

 .header {
   padding: 0 20px;
   border-bottom: solid 1px $borderColor;
   background-color: #f6f6eb;
   & a:hover {
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
