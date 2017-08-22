<template>
  <div class="searcher">
    <div class="wrapper">
      <div class="logo">
        <img class="logo-pic" src="./logo-72-1.jpg" alt="" />
        <span class="logo-text">快GO商城</span>
      </div>
      <div class="search-part">
        <div class="search-bar">
          <form class="search-blank">
            <span class="icon-magnifier"></span>
            <input name="" type="text" placeholder="搜索 快购商城 店铺/商品" value=""/>
            <span class="icon-camera"></span>
          </form><button class="search-text" href="">搜索</button>
        </div>
        <div class="recommendation">
          <li class="recom-item"><a href="#">大闸蟹</a></li>
          <li class="recom-item"><a href="#">坚果</a></li>
          <li class="recom-item"><a href="#">宝宝服饰</a></li>
          <li class="recom-item"><a href="#">保温杯</a></li>
          <li class="recom-item"><a href="#">羊毛被</a></li>
          <li class="recom-item"><a href="#">秋款男衬衫</a></li>
          <li class="recom-item"><a href="#">御泥坊新品首发</a></li>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script type="text/ecmascript-6">
 export default {};
</script>

<style lang="scss" rel="stylesheet/scss">
 @import '../../common/sass/mixin.scss';

 $fontSize: 13px;
 $padding: 5px 5px;
 $fontColor: #7e8c8d;
 $anchorColor: #FF0036;

 /* 左侧定宽，右侧自适应并居中, 采用flex方案 */
 .searcher {
   padding: 15px 0;
   width: 100%;
   /* 高度自适应 */
   /* height: $height; */
   .wrapper {
     @include media-check;
     display: flex;
     .logo {
       display: inline-block;
       margin-left: 10px;
       max-height: 100%;
       width: 230px;
       .logo-pic {
         vertical-align: bottom;
       }
       .logo-text {
         font-size: 25px;
         font-weight: bold;
         color: $anchorColor;
       }
     }
     .search-part {
       /* 居中 */
       margin: 0 auto;
       margin-top: 20px;
       color: $fontColor;
       font-size: $fontSize;
       .search-bar {
         box-sizing: border-box;
         vertical-align: center;
         /* 搜索框与下面推荐文字左对齐 */
         text-align: left;
         font-size: $fontSize;
         .search-blank {
           position: relative;
           display: inline-block;
           min-width: 380px;
           background-color: #fff;
           border: 2px solid $anchorColor;
           input {
             display: inline-block;
             height: 20px;
             min-width: 315px;
             line-height: 20px;
             padding: $padding;
             outline: none;
           }
           .icon-magnifier, .icon-camera {
             &:before {
               padding: 5px 0 5px 5px;
               height: 20px;
               line-height: 20px;
             }
           }
           .icon-camera {
             &:hover {
               color: $anchorColor;
             }
             &:before {
               position: absolute;
               right: 10px;
               text-align: right;
             }
           }
         }
         .search-text {
           box-sizing: border-box;
           display: inline-block;
           height: 34px;
           line-height: 34px;
           padding: 0 20px;
           border: none;
           /* 紧靠前面块元素 */
           position: absolute;
           color: #fff;
           font-size: $fontSize + 3px;
           font-weight: bold;
           outline: none;
           background-color: $anchorColor;
           a {
             font-weight: bold;
             font-size: $fontSize + 3px;
             color: #fff;
           }
         }
       }
       .recommendation {
         margin-top: 5px;
         .recom-item {
           display: inline-block;
           padding: 0 2px;
           a {
             font-size: $fontSize;
           }
         }
       }
     }
     a:hover {
       color: $anchorColor;
     }
   }
 }
</style>
