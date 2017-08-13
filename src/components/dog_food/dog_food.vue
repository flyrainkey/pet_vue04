<template>

    <div>
        <pet-head></pet-head>

        <div class="main-wrap">
            <div class="food-wrap">
                <div class="swipe">
                    <mt-swipe :auto="4000">
                        <mt-swipe-item>
                            <img src="./img/food1.jpg">
                        </mt-swipe-item>
                        <mt-swipe-item>
                            <img src="./img/food2.jpg">
                        </mt-swipe-item>
                        <mt-swipe-item>
                            <img src="./img/food3.jpg">
                        </mt-swipe-item>
                    </mt-swipe>
                </div>

                <div class="dog">
                    <ul class="lists clearfix">
                        <li class="list">
                            <a href="javascript:;">
                                <img src="./img/dog1.png">
                            </a>
                        </li>
                        <li class="list">
                            <a href="javascript:;">
                                <img src="./img/dog2.png">
                            </a>
                        </li>
                        <li class="list">
                            <a href="javascript:;">
                                <img src="./img/dog3.png">
                            </a>
                        </li>
                        <li class="list">
                            <a href="javascript:;">
                                <img src="./img/dog4.png">
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="brand-show">
                    <div class="text">
                        <span class="big">我的日期不完美</span>
                        <span class="small">大牌临期1折起</span>
                    </div>
                    <div class="brand-img">
                        <a href="">
                            <img src="./img/food-brand1.jpg">
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
                            <img src="./img/food-brand2.jpg">
                        </a>
                    </div>
                </div>

                <split></split>


            </div>
        </div>


        <pet-foot></pet-foot>
    </div>

</template>

<script>
    import split from '../split/split.vue'
    import header from '../header/header.vue'
    import footer from '../footer/footer.vue'

    export default {
        components: {
            split,
            'pet-head': header,
            'pet-foot': footer
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .food-wrap
    padding-bottom 55px
    .swipe
      height 160px
      width 100%
      img
        height 100%
        width 100%


    .dog
      width 100%
      .lists
        .list
          width 25%
          float left
          a
            display block
            img
              width 100%


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
</style>