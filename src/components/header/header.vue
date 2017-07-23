<template>
  <div header="header" class="header">
    <div class="wrapper">
      <div class="left">
        <a href="">收藏本站</a>
        <span class="line-left">广东v&nbsp;&nbsp;<span>[切换省份]</span></span>
        <span class="line-left"><img src="./device_09-16.png" alt="" />手机版</span>
        <img alt="" src="./qrcode-16.png"/>
        <img alt="" class="line-left" src="./weibo-sina-16.png"/>
      </div>
      <div class="right">
        <span>您好！</span>
        <span>请<a href="">登录注册</a> </span>
        <span class="line-left">我的1号商城</span>
        <span class="line-left">收藏夹</span>
        <span class="line-left">帮助中心</span>
        <span class="line-left">商家入住通道</span>
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
     & a {
       color: $anchorColor;
     }
   }
 }
</style>
