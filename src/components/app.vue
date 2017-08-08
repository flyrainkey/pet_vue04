<template>
    <div class="wrap">
        <!--头部-->
        <pet-header></pet-header>

        <!--内容区-->
        <div class="main-wrap">
            <router-view></router-view>
        </div>

    </div>
</template>

<script>
    import header from './header/header.vue'
    export default {
      components: {
          'pet-header': header
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .wrap
    position relative
    .main-wrap
      width 100%
      height 2000px
      position absolute
      top 143px
      background-color rgba(0,255,0,.2)




</style>