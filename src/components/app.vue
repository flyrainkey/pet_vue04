<template>
    <div class="wrap">
        <!--头部-->
        <pet-header></pet-header>

        <!--内容区-->
        <div class="main-wrap">
            <router-view></router-view>
        </div>

        <!--底部-->

        <pet-footer></pet-footer>

    </div>
</template>

<script>
    import header from './header/header.vue'
    import footer from './footer/footer.vue'
    export default {
      components: {
          'pet-header': header,
          'pet-footer': footer
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .wrap
    position relative
    .main-wrap
      width 100%
      min-height 100%
      /*height 20000px*/
      position absolute
      top 143px
      /*background-color rgba(0,255,0,.2)*/




</style>