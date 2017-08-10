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

                    <div class="good">
                        <div class="img-wrap">
                            <img src="./img/good2.jpg">
                        </div>
                        <div class="price">
                            <span>￥9.9</span>
                        </div>
                        <div class="save">
                            <span>省￥9.9</span>
                        </div>
                    </div>

                    <div class="good">
                        <div class="img-wrap">
                            <img src="./img/good3.jpg">
                        </div>
                        <div class="price">
                            <span>￥9.9</span>
                        </div>
                        <div class="save">
                            <span>省￥9.9</span>
                        </div>
                    </div>

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

                    <div class="good">
                        <div class="img-wrap">
                            <img src="./img/good2.jpg">
                        </div>
                        <div class="price">
                            <span>￥9.9</span>
                        </div>
                        <div class="save">
                            <span>省￥9.9</span>
                        </div>
                    </div>

                    <div class="good">
                        <div class="img-wrap">
                            <img src="./img/good3.jpg">
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

        <split></split>

        <div class="hot">
            <div class="hot-title">
                <img src="./img/hot.jpg">
            </div>

            <div class="img-box">
                <div class="left">
                    <img src="./img/left.png">
                </div>
                <div class="right">
                    <div class="top"><img src="./img/right1.jpg"></div>
                    <div class="bottom"><img src="./img/right2.jpg"></div>
                </div>
            </div>

        </div>

        <split></split>

        <div class="experience">
            <div class="title">
                <img src="./img/exp-title.png">
            </div>

            <div class="more">
                <a href="javascript:;">
                    <img src="./img/more2.png">
                </a>
            </div>
        </div>

        <div class="exp-swipe">
            <mt-swipe :auto="4000">
                <mt-swipe-item>
                    <img src="./img/exp1.jpg">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="./img/exp2.jpg">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="./img/exp3.jpg">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="./img/exp4.jpg">
                </mt-swipe-item>
            </mt-swipe>
        </div>

        <div class="special">
            <div class="brand">
                <img src="./img/special.png">
            </div>
        </div>

        <div class="brand-show">
            <div class="text">
                <span class="big">丝倍亮3免一</span>
                &nbsp; &nbsp;
                <span class="small">丝倍亮3免一</span>
            </div>

            <div class="brand-img">
                <a href="">
                    <img src="./img/brand1.jpg">
                </a>
            </div>
        </div>

        <div class="brand-show">
            <div class="text">
                <span class="big">安娜马特</span>
                <span class="small">无谷低敏</span>
            </div>

            <div class="brand-img">
                <a href="">
                    <img src="./img/brand2.jpg">
                </a>
            </div>
        </div>

        <div class="brand-show">
            <div class="text">
                <span class="big">品牌特卖-澳路雪&amp;圣路薇</span>
                <span class="small">口碑联合，清凉一“夏”</span>
            </div>

            <div class="brand-img">
                <a href="">
                    <img src="./img/brand3.jpg">
                </a>
            </div>
        </div>

        <div class="brand-show">
            <div class="text">
                <span class="big">>品牌特卖-PerfectCoat香波</span>
                <span class="small">口碑联合，清凉一“夏”</span>
            </div>

            <div class="brand-img">
                <a href="">
                    <img src="./img/brand4.jpg">
                </a>
            </div>
        </div>

        <div class="brand-show">
            <div class="text">
                <span class="big">我的日期不完美</span>
                <span class="small">大牌临期1折起</span>
            </div>

            <div class="brand-img">
                <a href="">
                    <img src="./img/brand5.jpg">
                </a>
            </div>
        </div>

        <split></split>

        <div class="evaluate">
            <div class="title">
                <img src="./img/evaluate.png">
                <div class="rating">
                    <a href="javascript:;">好评率99.64%</a>
                </div>
            </div>

            <div class="praise">
                <ul class="lists clearfix">
                    <li class="list">
                        <a href="javascript:;">
                            <div class="comment-box">
                                <div class="comment-pic">
                                    <img src="./img/comment1.jpg">
                                    <div class="join_time">加入E宠2年0月</div>
                                </div>
                                <div class="user-info">
                                    <span class="nickname">红*****ω</span>
                                    <span class="pet-name">中华田园猫</span>
                                </div>
                                <div class="comment-info">
                                    包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
                                </div>
                            </div>
                        </a>
                    </li>

                    <li class="list">
                        <a href="javascript:;">
                            <div class="comment-box">
                                <div class="comment-pic">
                                    <img src="./img/comment2.jpg">
                                    <div class="join_time">加入E宠2年0月</div>
                                </div>
                                <div class="user-info">
                                    <span class="nickname">红*****ω</span>
                                    <span class="pet-name">中华田园猫</span>
                                </div>
                                <div class="comment-info">
                                    包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
                                </div>
                            </div>
                        </a>
                    </li>

                    <li class="list">
                        <a href="javascript:;">
                            <div class="comment-box">
                                <div class="comment-pic">
                                    <img src="./img/comment3.jpg">
                                    <div class="join_time">加入E宠2年0月</div>
                                </div>
                                <div class="user-info">
                                    <span class="nickname">红*****ω</span>
                                    <span class="pet-name">中华田园猫</span>
                                </div>
                                <div class="comment-info">
                                    包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
                                </div>
                            </div>
                        </a>
                    </li>

                    <li class="list">
                        <a href="javascript:;">
                            <div class="comment-box">
                                <div class="comment-pic">
                                    <img src="./img/comment4.jpg">
                                    <div class="join_time">加入E宠2年0月</div>
                                </div>
                                <div class="user-info">
                                    <span class="nickname">红*****ω</span>
                                    <span class="pet-name">中华田园猫</span>
                                </div>
                                <div class="comment-info">
                                    包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <split></split>



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
      padding-bottom 55px
      .swipe
        height 160px
        width 100%
        img
          width 100%
          height 160px
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
              margin-left 46px


        .buy
          font-size 0
          background-color lightgray
          width 100%
          overflow auto
          &:before
            content ''
            display table
            clear both
          .goods
            white-space nowrap
            .good
              background-color #fff
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
      .hot
        font-size 0
        width 100%
        .hot-title
          img
            width 100%
        .img-box
          display flex
          .left
            width 42.67%
            img
              width 100%
          .right
            width 57.33%
            img
              width 100%

      .experience
        font-size 0
        padding-top 10px
        margin-bottom 5px
        position relative
        .title
          img
            display block
            max-width 50%
            max-height 73px
            margin 0 auto
        .more
          position absolute
          right 0
          top 6px
          a
            display inline-block
            img
              display block
              /*max-width 50%*/
              max-height 63px
      .exp-swipe
        height 155px
        width 100%
        img
          height 155px
          width 100%
      .special
        padding-top 5px
        margin-bottom 5px
        &:after
          content ''
          display block
          height 1px
          background-color #999
        .brand
          img
            display block
            max-width 50%
            max-height 73px
            margin 0 auto
      .brand-show
        font-size 0
        .text
          padding 10px
          .big
            font-size 15px
          .small
            margin-left 10px
            font-size 12px
            color #999
        .brand-img
          a
            display block
            img
              width 100%

      .evaluate
        .title
          position relative
          img
            display block
            height 45px
            margin 0 auto
          .rating
            padding-right 10px
            background-image url("./img/index_icon_comment_sanjiao.png")
            background-repeat no-repeat
            background-position-x right
            background-size 10px 12px
            position absolute
            font-size 12px
            right 10px
            top 18px

        .praise
          box-sizing border-box
          width 100%
          padding-right 10px
          padding-bottom 10px
          .lists
            .list
              float left
              width 50%
              .comment-box
                padding-bottom 15px
                margin-left: 10px
                margin-top: 10px
                background-color #f5f5f5
                .comment-pic
                  height 150px
                  overflow hidden
                  position relative
                  img
                    display block
                    width 100%
                  .join_time
                    position absolute
                    bottom 0
                    width 100%
                    text-align center
                    font-size 12px
                    background-color rgba(0,0,0,0.4)
                    line-height: 1.6
                    color #fff


                .user-info
                  color #333
                  padding 0 5px
                  margin-top 5px
                  line-height 1.6
                  box-sizing border-box
                  font-size 12px
                  .nickname
                    color inherit
                  .pet-name
                    float right
                    border-radius 5px
                    background-color #ddd


                .comment-info
                  padding 0 5px
                  margin-top 5px
                  height 60px
                  overflow hidden
                  font-size 13px
                  color #999
                  line-height 1.6







</style>