<template>
  <div class="sidebar">
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
    <a class="sidebar-item" href="">
      <span class="sidebar-button">
        <i class="sidebar-icon icon-arrow-up"></i>
        <span class="sidebar-text">回到<br />顶部</span>
      </span>
    </a>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="scss" rel="stylesheet/scss">
 /* 用于兼容性前缀的添加 */
 @import '../../common/sass/mixin.scss';

 $fontSize: 12px;
 $sidebar-size: 40px;
 $icon-color: #FFAA01;
 $icon-bgcolor: #383838;

 .sidebar {
   position: fixed;
   right: 0px;
   bottom: 2px;
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
       /* 加载sidebar-item中不可行 */
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
         background-color: $icon-bgcolor;
         line-height: $sidebar-size;

       }
       .sidebar-text {
         top: $sidebar-size;
         padding-top: ($sidebar-size - $fontSize * 2) / 2;
         color: $icon-bgcolor;
         background-color: $icon-color;
         font-size: $fontSize;
         line-height: 1.3;
       }
     }
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
</style>
