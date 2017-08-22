<template>
  <div class="to-top"  @click="toTop" v-show="display">
    <span class="icon-to-top"></span>
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
 .to-top {
   position: fixed;
   right: 10px;
   bottom: 10px;
   width: 50px;
   height: 50px;
   text-align: center;
   border-radius: 50%;
   background-color: rgba(0,0,0,0.3);
   .icon-to-top {
     &:before {
       height: 50px;
       line-height: 50px;
       text-align: center;
       font-size: 40px;
       color: #fff;
     }
   }
 }
</style>
