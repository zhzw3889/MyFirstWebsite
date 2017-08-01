<template>
  <div class="searcher">
    <div class="wrapper">
      <div class="left">
        <img class="pic" src="./logo-36.png" alt="" />
      </div>
      <div class="middle">
        <div class="searcherBar">
          <input class="blank" name="" type="text" placeholder="搜索 快购商城 店铺/商品" value=""/>
          <span class="search"><a href="">搜索</a></span>
        </div>
        <div class="recommendation">
          <li class="item"><a href="#">大闸蟹</a></li>
          <li class="item"><a href="#">坚果</a></li>
          <li class="item"><a href="#">宝宝服饰</a></li>
          <li class="item"><a href="#">保温杯</a></li>
          <li class="item"><a href="#">羊毛被</a></li>
          <li class="item"><a href="#">秋款男衬衫</a></li>
          <li class="item"><a href="#">御泥坊新品首发</a></li>
        </div>
      </div>
      <!-- <div class="right">
           <img class="pic2" alt="" src="./logo-36-3.png"/>
           <div class="stroll">
           <a href="">去快GO店逛逛</a>
           </div>
           </div> -->
    </div>
  </div>
  </div>
</template>

<script type="text/ecmascript-6">
 export default {};
</script>

<style lang="scss" rel="stylesheet/scss">
 $fontSize: 13px;
 $height: 66px;
 $width: 600px;/* 设备检查时变动 */
 $padding: 5px 10px;

 /* flex居中 */
 .searcher {
   padding: 0 40px;
   margin: 10px 0;
   height: $height;
   & a:hover {
     color: red;
   }
   .left {
     margin-left: 10px;
     float: left;
     width: 138px;
     .pic {
       margin-top: ($height - 36px) / 2;
     }
   }
   .middle {
     display: inline-block;
     float: left;
     height: $height;
     font-size: $fontSize;
     .searcherBar {
       margin-top: 12px;
       margin-left: $width / 5;
       padding: 2px;
       font-size: $fontSize;
       background-color: #b8052e;
       .blank {
         width: $fontSize * 30;
         height: 20px;
         padding: $padding;
       }
       .search {
         padding: 5px 15px;
         a {
           font-weight: bold;
           font-size: $fontSize + 3px;
           color: #fff;
         }
       }

     }
     .recommendation {
       margin-top: 5px;
       margin-left: $width / 5;
       .item {
         float: left;
         padding: 0 2px;
         a {
           font-size: $fontSize;
         }
       }
     }
   }
   /* .right {
      $height: 34px;

      margin-top: 12px;
      float: right;
      height: $height;
      background-color: #b8052e;
      .pic2 {
      display: inline-block;
      float: left;
      margin: 5px;
      }
      .stroll {
      display: inline-block;
      margin: 1px;
      float: left;
      line-height: $height - 2px;
      padding: 0 5px;
      font-size: $fontSize;
      background-color: #FFF;
      vertical-align: center;
      }
      } */
 }
</style>
