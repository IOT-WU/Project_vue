import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'//菜单
import Login from '../views/Login.vue'//登录
import LeaveApply from '../views/LeaveApply.vue'//请假申请
import LeaveApproval from '../views/LeaveApproval.vue'//请假审批
import EmployApply from '../views/EmployApply.vue'//录用申请
import EmployApprova from '../views/EmployApprova.vue'//录用审批
import AnnualApply from '../views/AnnualApply.vue'//招聘人员申请
import DepartureApply from '../views/DepartureApply.vue'//离职申请
import DepartureApprova from '../views/DepartureApprova.vue'//离职审批
import AnnualApprova from '../views/AnnualApprova.vue'//招聘人员审批
import stafflApply from '../views/stafflApply.vue'//人力资源申请
import stafflApprova from '../views/stafflApprova.vue'//人力资源审批
import LaunchApplication from '../views/LaunchApplication.vue'//申请子菜单
import RequestApplication from '../views/RequestApplication.vue'//审批子菜单
import chapterApply from '../views/chapterApply.vue'//用章申请
import chapterApplyova from '../views/chapterApplyova.vue'//用章审批
import PrintsApply from '../views/PrintsApply.vue'//刻章申请
import PrintsApplyova from '../views/PrintsApplyova.vue'//刻章审批
import AnnouncementApply from '../views/AnnouncementApply.vue'//公告基本信息
import FileApply from '../views/FileApply.vue'//刻章审批
import TransferApply from '../views/TransferApply.vue'  //离职交接表
import Announcementmanagement from '../views/Announcementmanagement.vue'//公告管理页面
import EmployeeturnoverApply from '../views/EmployeeturnoverApply.vue'  //员工离职面谈表
import AssetsaddApply from '../views/AssetsaddApply.vue'  //资产添加页面
import AssetsApply from '../views/AssetsApply.vue'//资产申请页面
import carapplicationApply from '../views/carapplicationApply.vue'//用车申请

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
        path: '/stafflApprova',
        name: 'stafflApprova',
        component: stafflApprova
    },
    {
        path: '/chapterApply',
        name: 'chapterApply',
        component: chapterApply
    },
    {
        path: '/chapterApplyova',
        name: 'chapterApplyova',
        component: chapterApplyova
    },
    {
        path: '/PrintsApply',
        name: 'PrintsApply',
        component: PrintsApply
    },
    {
        path: '/PrintsApplyova',
        name: 'PrintsApplyova',
        component: PrintsApplyova
    },
    {
        path: '/AnnouncementApply',
        name: 'AnnouncementApply',
        component: AnnouncementApply
    },
    {
        path: '/FileApply',
        name: 'FileApply',
        component: FileApply
    },
    {
        path: '/TransferApply',
        name: 'TransferApply',
        component: TransferApply
    },
    {
        path: '/EmployeeturnoverApply',
        name: 'EmployeeturnoverApply',
        component: EmployeeturnoverApply
    },
    {
        path: '/carapplicationApply',
        name: 'carapplicationApply',
        component: carapplicationApply
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
                //公告管理页面
                path: '/Announcementmanagement',
                name: 'Announcementmanagement',
                component: Announcementmanagement
            },
            {
                //资产添加页面
                path: '/AssetsaddApply',
                name: 'AssetsaddApply',
                component: AssetsaddApply
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
