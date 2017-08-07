<template>
    <div id="test">
        <dog :auto="4000">
            <dogitem>1</dogitem>
            <dogitem>2</dogitem>
            <dogitem>3</dogitem>
        </dog>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Mint from 'mint-ui'
    //import {Swipe, SwipeItem} from 'mint-ui'

    new Vue({
        el: '#test',

    })
</script>

<style>


</style>