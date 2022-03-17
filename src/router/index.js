import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        name: 'Home',
        path: '/home',
        component: () => import('@/views/home/Home')
    },
    {
        name: 'Home',
        path: '/home',
        component: () => import('@/views/home/Home')
    },
    {
        name: 'Category',
        path: '/home',
        component: () => import('@/views/home/Home')
    },
    {
        name: 'Cart',
        path: '/home',
        component: () => import('@/views/home/Home')
    },
    {
        name: 'Profile',
        path: '/home',
        component: () => import('@/views/home/Home')
    },
    {
        name: 'Detail',
        path: '/home',
        component: () => import('@/views/home/Home')
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router