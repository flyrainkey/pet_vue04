<template>
    <div>
        <div class="login-wrap">
            <div class="head">
                <div class="head-top">
                    <a href="#index" class="back">
                        <img src="./arrow-left.png">
                    </a>
                    <a href="javascript:;" class="sign-up">
                        <span>Sign up</span>
                    </a>
                </div>
                <div class="head-mid">
                    <img src="./e-pet.png">
                </div>
                <div class="head-bottom">
                    <mt-navbar v-model="selected">
                        <mt-tab-item id="1">普通登录</mt-tab-item>
                        <mt-tab-item id="2">手机动态密码登录</mt-tab-item>
                    </mt-navbar>
                </div>
            </div>
        </div>

        <form class="form-wrap">
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
                    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
                    <mt-field label="验证码" placeholder="请输入图片内容" type="tel" v-model="phone"></mt-field>
                    <mt-field label="动态密码" placeholder="获取动态密码" type="password" v-model="password"></mt-field>
                </mt-tab-container-item>
            </mt-tab-container>

            <div class="forget">
                <a href="javascript:;">忘记密码？</a>
            </div>

            <div class="submit">
                <a href="javascript:;">登 录</a>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                selected: '1',
                phone: null,
                username: null,
                password: null,
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    
  .login-wrap
      width 100%
      font-size  62.5%
    .head
      width 100%
      padding 0 0
      background url("./login-bg.png") no-repeat
      background-size 100% 100%
      .head-top
        height 50px
        line-height 50px
        padding 0 1em
        display flex
        justify-content space-between
        .back
          img
            width 12px
            height 17px
        .sign-up
          font-size 1.6em
          color #ffffff


      .head-mid
        padding 1em 0 2em 0
        img
          display block
          width 20%
          margin 0 auto


      .head-bottom
        padding-bottom 3px
        .mint-navbar
          background-color rgba(255,255,255,0.3)
          .mint-tab-item-label
            font-size 15px
            color #ffffff





  .form-wrap
    padding 0 20px
    .mint-tab-container
      margin-bottom 0
    .forget
      text-align right
    .submit
      text-align center
      padding-top 0.5em
      a
        display block
        background-color #2ec975
        padding 0.6em 0
        border-radius 5px
        color #ffffff
        letter-spacing 5px
        font-size 16px



</style>