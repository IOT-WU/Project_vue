import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'//菜单
import Login from '../views/Login.vue'//登录
import LeaveApply from '../views/LeaveApply.vue'//请假申请
import EmployApply from '../views/EmployApply.vue'//录用申请
import AnnualApply from '../views/AnnualApply.vue'//招聘人员申请
import DepartureApply from '../views/DepartureApply.vue'//离职申请
import stafflApply from '../views/stafflApply.vue'//人力资源申请
import procurement from '../views/procurement.vue'//日常采购申请单
import Reception from '../views/Reception.vue'//接待申请
import MeetingRoomNew from '../views/MeetingRoomNew.vue'//会议室新增
import ReservationMeetingRoom from '../views/ReservationMeetingRoom.vue'//会议室预定
import ReservationProcurement from '../views/ReservationProcurement.vue'//日常采购管理

import LaunchApplication from '../views/LaunchApplication.vue'//申请子菜单
import ProcessedApplication from '../views/ProcessedApplication.vue'//已处理申请
import PendingApplication from '../views/PendingApplication.vue'//待处理申请
import EndApplication from '../views/EndApplication.vue'//已完成申请
import MyApplication from '../views/MyApplication.vue'//我的申请
import AssetsApply from '../views/AssetsApply.vue'//资产申请
import About from '../views/About.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/About',
        name: 'About',
        component: About
    },
    {
        path: '/ReservationProcurement',
        name: 'ReservationProcurement',
        component: ReservationProcurement
    },
    {
        path: '/procurement',
        name: 'procurement',
        component: procurement
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
        path: '/ReservationMeetingRoom',
        name: 'ReservationMeetingRoom',
        component: ReservationMeetingRoom
    },
    {
        path: '/LeaveApply',
        name: 'LeaveApply',
        component: LeaveApply
    },
    {
        path: '/EmployApply',
        name: 'EmployApply',
        component: EmployApply
    },
    {
        path: '/AnnualApply',
        name: 'AnnualApply',
        component: AnnualApply
    },
    {
        path: '/DepartureApply',
        name: 'DepartureApply',
        component: DepartureApply
    },
    {
        path: '/stafflApply',
        name: 'stafflApply',
        component: stafflApply
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
            {
                //资产申请页面
                path: '/AssetsApply',
                name: 'AssetsApply',
                component: AssetsApply
            },
            {
                //已处理申请
                path: '/ProcessedApplication',
                name: 'ProcessedApplication',
                component: ProcessedApplication
            },
            {
                //待处理申请
                path: '/PendingApplication',
                name: 'PendingApplication',
                component: PendingApplication
            },
            {
                //已完成申请
                path: '/EndApplication',
                name: 'EndApplication',
                component: EndApplication
            },
            {
                //我的申请
                path: '/MyApplication',
                name: 'MyApplication',
                component: MyApplication
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

// //路由导航守卫
// router.beforeEach((to, from, next) => {
//     if (to.path == '/login') {
//         next();
//     } else {
//         let token = window.sessionStorage["token"];
//         //如果token为空就跳转到Login界面
//         if (token == null || token == '') {
//             next('/login');
//             alert("请先登录");
//         } else {
//             next();
//         }
//     }
// })

export default router
