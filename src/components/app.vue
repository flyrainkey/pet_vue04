<template>
    <div>
        <!--头部-->
        <pet-header></pet-header>

        <router-view></router-view>

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

  /*.tab
    display flex
    .tab-item
      flex 1
      text-align center*/



</style>