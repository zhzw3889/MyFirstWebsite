<template>
  <div class="cy-side-tools-wrap">
    <!-- 左侧部分，随页面滚动切换高亮，也可直接点击 -->
    <div class="cy-side-tools-ul0">
    </div>
    <!-- 右侧中间部分，购物车，用户中心等 -->
    <div class="cy-side-tools-ul1">
      <a class="sidebar-item" href="">
        <span class="sidebar-button">
          <i class="sidebar-icon icon-user-o"></i>
          <span class="sidebar-text">我的<br />会员</span>
        </span>
      </a>
      <a class="sidebar-item" href="">
        <span class="sidebar-button">
          <i class="sidebar-icon icon-star-o"></i>
          <span class="sidebar-text">我的<br />收藏</span>
        </span>
      </a>
      <a class="sidebar-item" href="">
        <span class="sidebar-button">
          <i class="sidebar-icon icon-rmb"></i>
          <span class="sidebar-text">我的<br />资产</span>
        </span>
      </a>
      <a class="sidebar-item" href="">
        <span class="sidebar-button">
          <i class="sidebar-icon icon-history"></i>
          <span class="sidebar-text">我看<br />过的</span>
        </span>
      </a>
      <a class="sidebar-item" href="">
        <span class="sidebar-button">
          <i class="sidebar-icon icon-heart-o"></i>
          <span class="sidebar-text">我关<br />注的</span>
        </span>
      </a>
      <a class="sidebar-item" href="">
        <span class="sidebar-button">
          <i class="sidebar-icon icon-shopping-cart"></i>
          <span class="sidebar-text">购物<br />车</span>
        </span>
      </a>
    </div>
    <!-- 右边栏，移动模式时隐藏 -->
    <div class="cy-side-tools-ul2">
      <a class="sidebar-item" href="">
        <span class="sidebar-button">
          <i class="sidebar-icon icon-wechat"></i>
          <span class="sidebar-text">公众<br />帐号</span>
        </span>
        <span class="sidebar-layer sidebar-layer-wechat"></span>
      </a>
      <a class="sidebar-item" href="">
        <span class="sidebar-button">
          <i class="sidebar-icon icon-comment"></i>
          <span class="sidebar-text">意见<br />反馈</span>
        </span>
      </a>
      <a class="sidebar-item" href="">
        <span class="sidebar-button">
          <i class="sidebar-icon icon-qrcode"></i>
          <span class="sidebar-text">APP<br />下载</span>
        </span>
        <span class="sidebar-layer sidebar-layer-app" ></span>
      </a>
      <a class="sidebar-item" @click="toTop" v-show="display" href="">
        <span class="sidebar-button">
          <i class="sidebar-icon icon-arrow-up"></i>
          <span class="sidebar-text">回到<br />顶部</span>
        </span>
      </a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
 export default {
   data: function () {
     return {
       display: false
     };
   },
   methods: {
     toTop (e) {
       var timer = null;
       /* isTop = true; */

       e.preventDefault();

       timer = setInterval(() => {
         let osTop = document.documentElement.scrollTop || document.body.scrollTop;
         let ispeed = Math.ceil(osTop / 4); /* 以每次80%的速度递减，直至为零 */

         document.documentElement.scrollTop = document.body.scrollTop = osTop - ispeed;
         /* console.log('osTop=%d, ispeed=%d', osTop, ispeed); */

         if (osTop === 0) {
           clearInterval(timer);
         }
       }, 20);
     }
   },
   created () {
     /* scroll事件是加于window上的，暂时用setTnterval解决 */
     setInterval(() => {
       let osTop = document.documentElement.scrollTop || document.body.scrollTop;
       let clientHeight = document.documentElement.clientHeight;

       /* 用vue提供的v-show功能 */
       if (osTop >= clientHeight) {
         this.display = true;
       } else {
         this.display = false;
       }
     }, 20);
   }
 };
</script>

<style lang="scss" rel="stylesheet/scss">
 /* 用于兼容性前缀的添加 */
 @import '../../common/sass/mixin.scss';

 $fontSize: 12px;
 $sidebar-size: 40px;
 $icon-color: #FFAA01;
 $icon-bgcolor: #383838;

 .cy-side-tools-wrap {
   position: fixed;
   height: 100%;
   min-width:  $sidebar-size;
   right: 0;
   top: 0;
   z-index: 100;
   background-color: #333;

   /* 左侧边栏，暂未开发，以后再加 */
   .cy-side-tools-ul0 {
     display: none;
   }
   /* .cy-side-tools-ul1: 中间的购物车，收藏等 */
   /* .cy-side-tools-ul2: 底部的回到顶部等功能 */
   .cy-side-tools-ul1, .cy-side-tools-ul2 {
     position: fixed;
     right: 0;
     .sidebar-item {
       position: relative;
       display: block;
       width: $sidebar-size;
       height: $sidebar-size;
       &:hover {
         .sidebar-layer {
           @include opacity(1);
           @include scale(1);
         }
       }
       .sidebar-button {
         position: absolute;
         left: 0;
         top: 0;
         width: $sidebar-size;
         height: $sidebar-size;
         overflow: hidden; /* 设置图标与文字的隐藏与显示 */
         /* 加在sidebar-item中不可行 */
         &:hover {
           .sidebar-icon {
             top: - $sidebar-size;
           }
           .sidebar-text {
             top: 0;
           }
         }
         .sidebar-icon, .sidebar-text {
           position: absolute;
           left: 0;
           width: $sidebar-size;
           height: $sidebar-size;
           text-align: center;
           @include transition(top 0.5s);
         }
         .sidebar-icon {
           top: 0;
           font-size: 20px;
           color: $icon-color;
           line-height: $sidebar-size;
         }
         .sidebar-text {
           top: $sidebar-size;
           padding-top: ($sidebar-size - $fontSize * 2) / 2;
           color: #333;
           background-color: $icon-color;
           font-size: $fontSize;
           font-weight: bold;
           line-height: 1.3;
         }
       }
       /* 二维码 */
       .sidebar-layer {
         position: absolute;
         right: $sidebar-size;
         bottom: 0;
         width: 460px;
         height: 310px;
         background: url('./image-460*310.png') no-repeat;
         @include opacity(0);
         @include transform-origin(95% 95%);
         @include scale(0.01);
         @include transition(all 0.5s);
       }
       .sidebar-layer-wechat {
         width: 220px;
         background-position: -240px 0;
       }
       .sidebar-layer-app {
         width: 220px;
         background-position: 0 0;
       }
     }
   }
   .cy-side-tools-ul1 {
     top: 25%;
   }
   .cy-side-tools-ul2 {
     bottom: 5px;
   }
 }
</style>
