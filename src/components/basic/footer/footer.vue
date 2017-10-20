<template>
  <div class="footer">
    <p class="about-us">
      <a class="about-us-item" href="">关于我们</a>
      <a class="about-us-item" href="">联系我们</a>
      <a class="about-us-item" href="">联系客服</a>
      <a class="about-us-item" href="">手机快GO</a>
      <a class="about-us-item" href="">友情链接</a>
      <a class="about-us-item" href="">快GO社区</a>
      <a class="about-us-item" href="">隐私政策</a>
      <a class="about-us-item" href="">快GO公益</a>
    </p>
    <p class="copyright">
      <span class="copyright-item">Copyright©2004-2017</span>
      <span class="copyright-item"><a href="http://www.miitbeian.gov.cn/">苏ICP备17062048号</a></span>
      <span class="copyright-item">消费者维权热线：4006067733</span>
    </p>
    <p class="others">
      <a class="others-item" href="http://www.bj.cyberpolice.cn/index.do"><img alt="" src="./call.jpg"/><span>网络警察</span></a>
      <a class="others-item" href="http://www.12377.cn/"><img alt="" src="./netpolice.jpg"/><span>互联网举报中心</span></a>
      <a class="others-item" href="http://www.12377.cn/node_548446.htm"><img alt="" src="./download.jpg"/><span>举报APP下载</span></a>
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
 export default {};
</script>

<style lang="scss" rel="stylesheet/scss">
 $fontSize: 13px;

 .footer {
   min-width: 1000px;
   background-color: #eaeaea;
   font-size: $fontSize;
   /* BFC手段，否则顶部必须padding-top才会留空档 */
   overflow: hidden;
   .about-us, .copyright, .others {
     margin: 20px 0;
     text-align: center;
   }
   .about-us-item,  .copyright-item {
     padding: 0 5px;
     color: #666;
     border-left: 1px solid #666;
     a {
       color: #666;
       &:hover {
         color: red;
       }
     }
     &:first-child {
       border: none;
     }
   }
   .others-item {
     margin-right: 20px;
     height: 24px;
     line-height: 24px;
     span {
       display: inline-block;
       margin-left: 5px;
       /* 文字与图像竖直对齐 */
       vertical-align: top;
       height: 24px;
       line-height: 24px;
     }
   }
 }
</style>
