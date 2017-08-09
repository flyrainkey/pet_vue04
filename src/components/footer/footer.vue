<template>
    <div class="footer">
        <ul class="lists clearfix">
            <li class="list">
                <a href="javascript:;"></a>
            </li>
            <li class="list">
                <a href="javascript:;"></a>
            </li>
            <li class="list">
                <a href="javascript:;"></a>
            </li>
            <li class="list">
                <a href="javascript:;"></a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .footer
    position fixed
    bottom 0
    left 0
    width 100%
    height 45px
    line-height 45px
    border-top 1px solid #e7e7e7
    .lists
      height 100%
      .list
        width 25%
        height 100%
        float left
        background-size auto 40px !important
        &:nth-child(1)
          background url("./img/footer1.png") no-repeat center 2px
        &:nth-child(2)
          background url("./img/footer2.png") no-repeat center 2px
        &:nth-child(3)
          background url("./img/footer3.png") no-repeat center 2px
        &:nth-child(4)
          background url("./img/footer4.png") no-repeat center 2px
        a
          display block
          height 100%








</style>