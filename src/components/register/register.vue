<template>
  <div class="login-wrapper">
    <v-mask></v-mask>
    <div class="login">
      <div class="title">
        用户注册
      </div>
      <div class="user">
        <div class="input-error" v-show="errorAlert">
          <span class="icon icon-minus-circle"></span>
          <span class="input-error-alert">
            用户名或密码错误！
          </span>
        </div>
        <div class="user-item username clearfix">
          <span class="icon icon-user"></span>
          <input class="user-input" name="" type="text" value="" placeholder="用户名" autocomplete="off"/>
        </div>
        <div class="user-item password clearfix">
          <span class="icon icon-lock"></span>
          <input class="user-input" name="" type="text" value="" placeholder="密码" autocomplete="off"/>
        </div>
        <div class="user-item password-confirm clearfix">
          <span class="icon icon-lock"></span>
          <input class="user-input" name="" type="text" value="" placeholder="请再输入一次密码" autocomplete="off"/>
        </div>
        <div class="user-item phone-number clearfix">
          <span class="icon icon-phone"></span>
          <input class="user-input" name="" type="text" value="" placeholder="请输入手机号" autocomplete="off"/>
        </div>
        <div class="user-item email clearfix">
          <span class="icon icon-envelope"></span>
          <input class="user-input" name="" type="text" value="" placeholder="请输入邮箱地址" autocomplete="off"/>
        </div>
        <div class="user-item question clearfix">
          <span class="icon icon-question"></span>
          <input class="user-input" name="" type="text" value="" placeholder="请输入密码提示问题" autocomplete="off"/>
        </div>
        <div class="user-item answer clearfix">
          <span class="icon icon-key"></span>
          <input class="user-input" name="" type="text" value="" placeholder="密码提示问题答案" autocomplete="off"/>
        </div>
      </div>
      <button class="login-btn">
        登 录
      </button>
      <div class="others">
        <router-link class="others-item" to="/login">直接登录 ></router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
 import mask from '../basic/mask/mask.vue';

 export default {
   data() {
     return {
       errorAlert: false
     };
   },
   components: {
     'v-mask': mask
   }
 };
</script>

<style lang="scss" rel="stylesheet/scss">
 @import '../../common/sass/mixin.scss';

 $fontSize: 16px;

 .login {
   box-sizing: border-box;
   position: fixed;
   /* 媒体查询居中，针对1250px、1200px、1000px总宽度 */
   @media only screen and (max-width: 2000px) {
     left: 475px;
   };
   @media only screen and (max-width: 1360px) {
     left: 450px;
   };
   @media only screen and (min-width: 0) and (max-width: 1210px) {
     left: 350px;
   };
   top: 15%;
   width: 350px;
   padding-bottom: 20px;
   text-align: center;
   font-size: $fontSize;
   border: 2px solid $anchorColor;
   background-color: #fff;
   index: 11;
   .title {
     margin: 5px 0;
     height: 40px;
     line-height: 40px;
     font-weight: bold;
     border-bottom: 1px solid #ddd;
   }
   .user {
     box-sizing: border-box;
     display: inline-block;
     width: 80%;
     .input-error {
       padding: 5px 10px;
       text-align: left;
       color: red;
       font-size: $fontSize - 5px;
       border: 1px solid red;
       background-color: #fde9e9;
     }
     .user-item {
       box-sizing: border-box;
       position: relative;
       padding-left: 38px;
       margin-top: 10px;
       height: 40px;
       line-height: 40px;
       border: 1px solid #bbb;
       .icon, .user-input {
         display: inline-block;
       }
       .icon {
         position: absolute;
         left: 0;
         top: 0;
         width: 38px;
         height: 38px;
         line-height: 38px;
         font-size: 20px;
         color: #bbb;
         border-right: 1px solid #bbb;
         background-color: #eee;
       }
       .user-input {
         width: 200px;
         height: 36px;
         line-height: 36px;
         padding: 0 6px;
         font-size: $fontSize -1px;
         outline: none;
       }
     }
   }
   .login-btn {
     width: 80%;
     height: 40px;
     margin-top: 10px;
     line-height: 40px;
     font-size: $fontSize;
     font-weight: bold;
     color: #fff;
     border: none;
     background-color: $anchorColor;
   }
   .others {
     display: inline-block;
     width: 80%;
     margin-top: 10px;
     text-align: right;
     font-size: $fontSize - 5px;
     .others-item {
       margin-left: 10px;
       &:hover {
         color: $anchorColor;
       }
     }
   }
 }
</style>
