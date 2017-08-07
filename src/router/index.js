import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index/index.vue'
import food from '../components/dog_food/dog_food.vue'
import discount from '../components/discount/discount.vue'
import video from '../components/fashion_video/fashion_video.vue'
import lesson from '../components/lesson/lesson.vue'



Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'index',
            component: index
        },
        {
            path: '/food',
            component: food
        },
        {
            path: '/discount',
            component: discount
        },
        {
            path: '/video',
            component: video
        },
        {
            path: '/lesson',
            component: lesson
        }
    ]
})
