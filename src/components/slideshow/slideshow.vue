<template>
  <div class="slideshow-wrap" id="slideshow">
    <transition-group tag="ul" class='slide-ul' name="list">
      <li v-for="(list, index) in slideList" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
        <a :href="list.clickUrl" >
          <img :src="list.image" :alt="list.desc">
        </a>
      </li>
    </transition-group>
    <div class="slideshow-items" >
      <span v-for="(item, index) in slideList.length" :class="{'active':index===currentIndex}" @mouseenter="stop" @mouseover="change(index)"></span>
    </div>
    <div class="slide-one">
      <span class="prev icon-chevron-thin-left"  @mouseenter="stop" @click="oneLeft"></span>
      <span class="next icon-more-right"  @mouseenter="stop" @click="oneRight"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
 export default {
   data () {
     return {
       slideList: [
         {
           'clickUrl': '#',
           'desc': '1',
           'image': require('./1.jpg')
         },
         {
           'clickUrl': '#',
           'desc': '2',
           'image': require('./2.jpg')
         },
         {
           'clickUrl': '#',
           'desc': '3',
           'image': require('./3.jpg')
         },
         {
           'clickUrl': '#',
           'desc': '4',
           'image': require('./4.jpg')
         },
         {
           'clickUrl': '#',
           'desc': '5',
           'image': require('./5.jpg')
         },
         {
           'clickUrl': '#',
           'desc': '6',
           'image': require('./6.jpg')
         },
         {
           'clickUrl': '#',
           'desc': '7',
           'image': require('./7.jpg')
         },
         {
           'clickUrl': '#',
           'desc': '8',
           'image': require('./8.jpg')
         }

       ],
       currentIndex: 0,
       timer: ''
     };
   },
   methods: {
     go () {
       this.timer = setInterval(() => {
         this.play();
       }, 2000);
     },
     stop () {
       clearInterval(this.timer);
       this.timer = null;
     },
     change (index) {
       this.currentIndex = index;
     },
     play () {
       this.currentIndex++;
       if (this.currentIndex > this.slideList.length - 1) {
         this.currentIndex = 0;
       }
     },
     oneLeft () {
       this.currentIndex--;
       if (this.currentIndex < 0) {
         this.currentIndex = this.slideList.length - 1;
       }
     },
     oneRight () {
       this.play();
     }
   },
   created () {
     this.$nextTick(() => {
       this.timer = setInterval(() => {
         this.autoPlay();
       }, 2000);
     });
   }
 };
</script>

<style lang="scss" rel="stylesheet/scss">
 $btn-color: red;
 $height: 350px;
 $width: 800px;

 .slideshow-wrap {
   float: left;
   position: relative;
   height: $height;
   width: $width;
   overflow: hidden;
   background-color: yellow;
   &:hover {
     .slide-one {
       .prev, .next {
         display: block;
       }
     }
   }
   .slide-ul {
     width: 100%;
     height: 100%;
     li {
       position: absolute;
       width: 100%;
       height: 100%;
       img {
         width: 100%;
         height: 100%;
       }
     }
   }
   .slideshow-items {
     position: absolute;
     /* z-index: 10; */
     left: ($width - 140px) / 2;
     top: 300px;
     margin: 0 auto;
     padding: 3px 6px;
     text-align: center;
     border-radius: 11px;
     background-color: hsla(0,0%,100%,.3);
     span {
       display: inline-block;
       margin: 0 3px;
       height: 10px;
       width: 10px;
       border-radius: 50%;
       background-color: #FFF;
       cursor: pointer;
     }
     .active {
       background-color: $btn-color;
     }
   }
   .slide-one {
     z-index: 10;
     .prev, .next {
       position: absolute;
       top: ($height - 60px) / 2;
       display: none;
       width: 30px;
       height: 60px;
       line-height: 60px;
       text-align: center;
       color: #FFF;
       background-color: rgba(0,0,0,0.3);
       &:hover {
         background-color: rgba(0,0,0,0.6);
       }
     }
     .prev {
       left: 0;
     }
     .next {
       right: 0;
     }
   }
 }
 /* .list-enter-active {
    transition: all 1s ease;
    transform: translateX(0)
    }

    .list-leave-active {
    transition: all 1s ease;
    transform: translateX(-100%)
    }

    .list-enter {
    transform: translateX(100%)
    }

    .list-leave {
    transform: translateX(0)
    } */
</style>
