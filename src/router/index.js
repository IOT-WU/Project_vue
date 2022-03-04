import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'//菜单
import Login from '../views/Login.vue'//登录
import LeaveApply from '../views/LeaveApply.vue'//请假申请
import EmployApply from '../views/EmployApply.vue'//录用申请
import AnnualApply from '../views/AnnualApply.vue'//招聘人员申请
import DepartureApply from '../views/DepartureApply.vue'//离职申请
import stafflApply from '../views/stafflApply.vue'//人力资源申请
import Insurance from '../views/Insurance.vue'//车辆保险

import LaunchApplication from '../views/LaunchApplication.vue'//申请子菜单
import RequestApplication from '../views/RequestApplication.vue'//审批子菜单
import PendingApplication from '../views/PendingApplication.vue'//待处理申请
import AssetsApply from '../views/AssetsApply.vue'//资产申请

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/LeaveApply',
        name: 'LeaveApply',
        component: LeaveApply
    },
    {
        path: '/Insurance',
        name: 'Insurance',
        component: Insurance
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
                //发起申请页面
                path: '/RequestApplication',
                name: 'RequestApplication',
                component: RequestApplication
            },
            {
                //资产申请页面
                path: '/AssetsApply',
                name: 'AssetsApply',
                component: AssetsApply
            },
            {
                //待处理申请
                path: '/PendingApplication',
                name: 'PendingApplication',
                component: PendingApplication
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
