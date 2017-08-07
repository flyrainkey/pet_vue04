<template>
    <div class="header-wrap">
        <div class="ad" v-show="isShow">
            <span class="close-btn" @click="closeAd">
            <img src="https://static.epetbar.com/static_wap/lib/common_images/closebtn_03.png">
        </span>

            <div class="ad-img">
                <a href="javascript:;">
                    <img src="https://img2.epetbar.com/nowater/2017-07/03/10/211547bb51dd23758f74fb86e9d7aae5.png@!water"
                         alt="pet">
                </a>
            </div>
        </div>

        <div class="header">

            <div class="nav">
                <div class="navigator">
                    <span>狗站|重庆</span>
                </div>
                <p class="search">
                    <input type="text" placeholder="搜索商品和品牌">
                </p>
                <a class="login">
                    <img src="https://static.epetbar.com/static_wap/epetapp/pages/index/images/mydope.png" alt="">
                </a>
            </div>

            <!--Tabs-->
            <div class="tab">
                <div class="tab-item">
                    <router-link to="/index">首页</router-link>
                </div>

                <div class="tab-item">
                    <router-link to="/food">狗粮</router-link>
                </div>

                <div class="tab-item">
                    <router-link to="/video">视频</router-link>
                </div>

                <div class="tab-item">
                    <router-link to="/lesson">课堂</router-link>
                </div>

                <div class="tab-item">
                    <router-link to="/discount">特卖</router-link>
                </div>

            </div>


        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isShow: true
            }
        },
        methods: {
            closeAd(){
                return this.isShow = !this.isShow
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
   .ad
    font-size 0
    width 100%
    position relative
    .ad-img
      img
        width 100%
      a
        display inline-block
    .close-btn
      display inline-block
      position absolute
      left 2%
      top: 31%
      width 5%
      box-sizing border-box
      vertical-align middle
      img
        width 100%
        height 100%
  .nav
    height 43px
    background-color rgba(255,0,0,.1)
    padding 5px 5px
    line-height 43px
  .header
    .nav
      font-size 14px
      display flex
      .navigator
        flex 4
      .search
        flex 8
      .login
        flex 2
        img
          width 24px
          vertical-align middle


    .tab
      display flex
      height 35px
      line-height 35px
      .tab-item
        flex 1
        text-align center
        font-size 14px


</style>