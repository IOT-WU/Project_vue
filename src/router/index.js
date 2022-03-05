import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Menu from '../views/Menu.vue'//菜单
import Login from '../views/Login.vue'//登录
import LeaveApply from '../views/LeaveApply.vue'//请假申请
import EmployApply from '../views/EmployApply.vue'//录用申请
import AnnualApply from '../views/AnnualApply.vue'//招聘人员申请
import DepartureApply from '../views/DepartureApply.vue'//离职申请
import stafflApply from '../views/stafflApply.vue'//人力资源申请
import Purchase from '../views/Purchase.vue'//固定资产购置申请
import Acceptance from '../views/Acceptance.vue'//固定资产验收
import Borrow from '../views/Borrow.vue'//固定借用
import Hondaver from '../views/Hondaver.vue'//固定交接
import Insurance from '../views/Insurance.vue'//车辆保险
import repair from '../views/repair.vue'//车辆保养
import maintain from '../views/maintain.vue'//车辆维修
import Violation from '../views/Violation.vue'//车辆违章

//菜单
import LaunchApplication from '../views/LaunchApplication.vue'//申请子菜单
import ProcessedApplication from '../views/ProcessedApplication.vue'//已处理申请
import PendingApplication from '../views/PendingApplication.vue'//待处理申请
import EndApplication from '../views/EndApplication.vue'//已完成申请
import MyApplication from '../views/MyApplication.vue'//我的申请
import AssetsaddApply from '../views/AssetsaddApply.vue'  //资产添加页面
import AssetsApply from '../views/AssetsApply.vue'//资产申请页面
import Announcementmanagement from '../views/Announcementmanagement.vue'//公告管理页面
import Maintenancemanagement from '../views/Maintenancemanagement.vue'//维护管理页面
import MeetingnewApply from '../views/MeetingnewApply.vue'//会议新增页面
//******

import chapterApply from '../views/chapterApply.vue'//用章申请
import PrintsApply from '../views/PrintsApply.vue'//刻章申请
import AnnouncementApply from '../views/AnnouncementApply.vue'//公告基本信息
import FileApply from '../views/FileApply.vue'//文件管理表
import TransferApply from '../views/TransferApply.vue'  //离职交接表
import EmployeeturnoverApply from '../views/EmployeeturnoverApply.vue'  //员工离职面谈表
import carapplicationApply from '../views/carapplicationApply.vue'//用车申请
import MeetingRoomNew from '../views/MeetingRoomNew.vue'//会议室新增
import Reception from '../views/Reception.vue'//接待申请
import ReservationMeetingRoom from '../views/ReservationMeetingRoom.vue'//会议室预定
import ReservationProcurement from '../views/ReservationProcurement.vue'//日常用品管理表单(以列表的形式展示)
import Procurement from '../views/Procurement.vue'//日常用品采购清单


import Fixedassets from '../views/Fixedassets.vue'//固定资产
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
        path: '/Procurement',
        name: 'Procurement',
        component: Procurement
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
        path: '/Violation',
        name: 'Violation',
        component: Violation
    },
    {
        path: '/repair',
        name: 'repair',
        component: repair
    },
    {
        path: '/maintain',
        name: 'maintain',
        component: maintain
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
        path: '/Purchase',
        name: 'Purchase',
        component: Purchase
    },
    {
        path: '/Borrow',
        name: 'Borrow',
        component: Borrow
    },
    {
        path: '/Hondaver',
        name: 'Hondaver',
        component: Hondaver
    },
    {
        path: '/Acceptance',
        name: 'Acceptance',
        component: Acceptance
    }, {
        path: '/chapterApply',
        name: 'chapterApply',
        component: chapterApply
    },
    {
        path: '/PrintsApply',
        name: 'PrintsApply',
        component: PrintsApply
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
        path: '/MeetingRoomNew',
        name: 'MeetingRoomNew',
        component: MeetingRoomNew
    },
    {
        path: '/Reception',
        name: 'Reception',
        component: Reception
    },
    {
        path: '/ReservationMeetingRoom',
        name: 'ReservationMeetingRoom',
        component: ReservationMeetingRoom
    },
    {
        path: '/Menu',
        name: 'Menu',
        component: Menu,
        children: [
            {
                //固定资产
                path: '/Fixedassets',
                name: 'Fixedassets',
                component: Fixedassets
            },
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
            {
                //待处理申请
                path: '/PendingApplication',
                name: 'PendingApplication',
                component: PendingApplication
            },
            {
                //我的申请
                path: '/MyApplication',
                name: 'MyApplication',
                component: MyApplication
            },
            {
                //已完成申请
                path: '/EndApplication',
                name: 'EndApplication',
                component: EndApplication
            },
            {
                //已处理申请
                path: '/ProcessedApplication',
                name: 'ProcessedApplication',
                component: ProcessedApplication
            },
            {
                //维护管理
                path: '/Maintenancemanagement',
                name: 'Maintenancemanagement',
                component: Maintenancemanagement
            },
            {
                //会议新增
                path: '/MeetingnewApply',
                name: 'MeetingnewApply',
                component: MeetingnewApply
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
