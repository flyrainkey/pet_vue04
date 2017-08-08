<template>

    <div class="index-content">
        <div class="swipe">
            <mt-swipe :auto="4000">
                <mt-swipe-item>
                    <img src="./img/ad.jpg">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="./img/dog.jpg">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="./img/water.jpg">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="./img/first.png">
                </mt-swipe-item>
            </mt-swipe>
        </div>

        <div class="fresh-wrap">
            <div class="new">
                <a href="javascript:;">
                    <img src="./img/fresh.gif">
                </a>
            </div>

            <ul class="sell">
                <li>
                    <a href=""><img src="./img/li_1.png"></a>
                </li>
                <li>
                    <a href=""><img src="./img/li_2.png"></a>
                </li>
                <li>
                    <a href=""><img src="./img/li_3.png"></a>
                </li>
                <li>
                    <a href=""><img src="./img/li_4.png"></a>
                </li>
                <li>
                    <a href=""><img src="./img/li_5.png"></a>
                </li>
            </ul>
        </div>

        <split></split>

        <div class="buy-crazy">
            <div class="crazy">
                <div class="logo">
                    <a href="javascript:;">
                        <img src="./img/crazy.png">
                    </a>
                </div>

                <div class="time">
                    <span>距离本场结束</span>
                    01: 25 : 53
                </div>
                <div class="more">
                    <a href="javascript:;">
                        <img src="./img/more.png">
                    </a>
                </div>
            </div>

            <div class="buy">
                <div class="goods">
                    <div class="good">
                        <div class="img-wrap">
                            <img src="./img/good1.jpg">
                        </div>
                        <div class="price">
                            <span>￥9.9</span>
                        </div>
                        <div class="save">
                            <span>省￥9.9</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    </div>





</template>

<script>

    import split from '../split/split.vue'

    export default {

        components: {
            split
        }

    }



</script>

<style lang="stylus" rel="stylesheet/stylus">

    .index-content

      .swipe
        height 160px
        width 100%
        img
          width 100%
          eight 160px
      .fresh-wrap
        height auto
        font-size 0
        .new
          img
            width 100%
        .sell
          width 100%
          height 90px
          li
            float left
            width 20%
            height 100%
            img
              width 100%


      .buy-crazy
        background-color rgba(66, 185, 131, .5)
        width 100%
        .crazy
          height 54px
          padding 5px
          line-height 1.6
          .logo
            float left
            a
              display inline-block
            img
              display block
              height 24px
          .time
            float left
            font-size 13px
          .more
            display inline-block
            a
              display inline-block
              vertical-align top
            img
              display inline-block
              height 40px
              vertical-align top
              margin-top -10px
              margin-left 50px


        .buy
          font-size 0
          background-color lightgray
          border-radius 20px
          .goods
            .good
              background-color rgba(0,0,120,.2)
              display inline-block
              .img-wrap
                img
                  height 100px
              .price
                font-size 16px
                text-align center
                color red
                line-height 1.6
              .save
                font-size 12px
                text-align center
                color #999
</style>