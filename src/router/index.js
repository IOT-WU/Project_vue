import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import Login from '../views/Login.vue'
import LaunchApplication from '../views/LaunchApplication.vue'
import Procurement from '../views/Procurement.vue'
import Reception from '../views/Reception.vue'
import MeetingRoomNew from '../views/MeetingRoomNew.vue'
import ReservationMeetingRoom from '../views/ReservationMeetingRoom.vue'
import ReservationProcurement from '../views/ReservationProcurement.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/ReservationProcurement',
        name: 'ReservationProcurement',
        component: ReservationProcurement
    },
    {
        path: '/ReservationMeetingRoom',
        name: 'ReservationMeetingRoom',
        component: ReservationMeetingRoom
    },
    {
        path: '/Reception',
        name: 'Reception',
        component: Reception
    },
    {
        path: '/MeetingRoomNew',
        name: 'MeetingRoomNew',
        component: MeetingRoomNew
    },
    {
        path: '/Procurement',
        name: 'Procurement',
        component: Procurement
    },
    {
        path: '/Menu',
        name: 'Menu',
        component: Menu,
        children: [
            {
                //发起申请页面
                path: '/LaunchApplication',
                name: 'LaunchApplication',
                component: LaunchApplication
            },
        ]
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

//路由导航守卫
router.beforeEach((to, from, next) => {
    if (to.path == '/login') {
        next();
    } else {
        let token = window.sessionStorage["token"];
        //如果token为空就跳转到Login界面
        if (token == null || token == '') {
            next('/login');
            alert("请先登录");
        } else {
            next();
        }
    }
})

export default router
