import { App, createApp } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import AppComponent from './app.vue';
import PrimeVue from 'primevue/config';
import Knob from 'primevue/knob';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Button from 'primevue/button';
import Card from 'primevue/card';
import 'primevue/resources/primevue.min.css';
import Menubar from 'primevue/menubar';
import Dialog from 'primevue/dialog';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Calendar from 'primevue/calendar';
import RadioButton from 'primevue/radiobutton';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';

import 'primevue/resources/themes/mdc-light-indigo/theme.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import store from './store';
import '../../public/css/common.css' /* COMMON CSS */
import '../../public/css/home.css' /* HOME CSS */
import '../../public/css/responsive.css' /* RESPONSIVE CSS */
import '../../public/css/overide.css' /* RESPONSIVE CSS */


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        // redirect: '/sample',
        // go to home page directly
        redirect: '/home/:lineId',
    },
    // {
    //     name: 'Sample',
    //     path: '/sample', component: () => import('./components/pages/sample.vue')
    // },
    // {
    //     name: 'Home',
    //     path: '/home/:lineId', 
    //     component: () => import('./components/pages/home.vue')
    // },
    {
        name: 'Home',
        path: '/home/:lineId',
        component: () => import('./components/pages/home.vue')
    },
    // {
    //     name: 'About',
    //     path: '/about', component: () => import('./components/pages/about.vue')
    // },
    {
        name: 'Registration',
        path: '/registration', component: () => import('./components/pages/registration.vue')
    },
    // {
    //     name: 'Treatment',
    //     path: '/treatment', component: () => import('./components/pages/treatment.vue')
    // },
    // {
    //     name: 'ClinicHours',
    //     path: '/clinic_hours', component: () => import('./components/pages/clinic_hours.vue')
    // },
    // {
    //     name: 'HealthEducation',
    //     path: '/health_education', component: () => import('./components/pages/health_education.vue')
    // },
    // {
    //     name: 'CommonProblem',
    //     path: '/common_problem', component: () => import('./components/pages/common_problem.vue')
    // }
]

export const router = createRouter({
    history: createWebHistory('#/'),
    routes: routes
})

const app: App<Element> = createApp(AppComponent)
app.use(PrimeVue, {
    ripple: true,
    locale: {
        "startsWith": "以...开始",
        "contains": "包含",
        "notContains": "不包含",
        "endsWith": "以...结尾",
        "equals": "等于",
        "notEquals": "不等于",
        "noFilter": "无筛选",
        "filter": "筛选",
        "lt": "小于",
        "lte": "小于等于",
        "gt": "大于",
        "gte": "大于等于",
        "dateIs": "日期为",
        "dateIsNot": "日期不为",
        "dateBefore": "日期早于",
        "dateAfter": "日期晚于",
        "custom": "自定义",
        "clear": "清除",
        "apply": "应用",
        "matchAll": "全部匹配",
        "matchAny": "任意匹配",
        "addRule": "添加规则",
        "removeRule": "移除规则",
        "accept": "是",
        "reject": "否",
        "choose": "选择",
        "upload": "上传",
        "cancel": "取消",
        "completed": "已完成",
        "pending": "待处理",
        "dayNames": [
            "星期日",
            "星期一",
            "星期二",
            "星期三",
            "星期四",
            "星期五",
            "星期六"
        ],
        "dayNamesShort": [
            "周日",
            "周一",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六"
        ],
        "dayNamesMin": [
            "日",
            "一",
            "二",
            "三",
            "四",
            "五",
            "六"
        ],
        "monthNames": [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
        ],
        "monthNamesShort": [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
        ],
        "chooseYear": "选择年份",
        "chooseMonth": "选择月份",
        "chooseDate": "选择日期",
        "prevDecade": "上一个十年",
        "nextDecade": "下一个十年",
        "prevYear": "上一年",
        "nextYear": "下一年",
        "prevMonth": "上个月",
        "nextMonth": "下个月",
        "prevHour": "上一小时",
        "nextHour": "下一小时",
        "prevMinute": "上一分钟",
        "nextMinute": "下一分钟",
        "prevSecond": "上一秒",
        "nextSecond": "下一秒",
        "am": "上午",
        "pm": "下午",
        "today": "今天",
        "weekHeader": "周",
        "firstDayOfWeek": 0,
        "showMonthAfterYear": true,
        "dateFormat": "yy/mm/dd",
        "weak": "弱",
        "medium": "中",
        "strong": "强",
        "passwordPrompt": "输入密码",
        "emptyFilterMessage": "未找到结果",
        "searchMessage": "有 {0} 条结果可用",
        "selectionMessage": "已选择 {0} 项",
        "emptySelectionMessage": "未选择任何项",
        "emptySearchMessage": "未找到结果",
        "emptyMessage": "无可用选项",
        "aria": {
            "trueLabel": "是",
            "falseLabel": "否",
            "nullLabel": "未选择",
            "star": "1颗星",
            "stars": "{star}颗星",
            "selectAll": "已选择所有项目",
            "unselectAll": "已取消选择所有项目",
            "close": "关闭",
            "previous": "上一个",
            "next": "下一个",
            "navigation": "导航",
            "scrollTop": "滚动到顶部",
            "moveTop": "移至顶部",
            "moveUp": "上移",
            "moveDown": "下移",
            "moveBottom": "移至底部",
            "moveToTarget": "移至目标",
            "moveToSource": "移至源",
            "moveAllToTarget": "全部移至目标",
            "moveAllToSource": "全部移至源",
            "pageLabel": "{page}",
            "firstPageLabel": "首页",
            "lastPageLabel": "尾页",
            "nextPageLabel": "下一页",
            "previousPageLabel": "上一页",
            "rowsPerPageLabel": "每页行数",
            "jumpToPageDropdownLabel": "跳至页面下拉框",
            "jumpToPageInputLabel": "跳至页面输入框",
            "selectRow": "选择行",
            "unselectRow": "取消选择行",
            "expandRow": "展开行",
            "collapseRow": "折叠行",
            "showFilterMenu": "显示筛选菜单",
            "hideFilterMenu": "隐藏筛选菜单",
            "filterOperator": "筛选运算符",
            "filterConstraint": "筛选条件",
            "editRow": "编辑行",
            "saveEdit": "保存编辑",
            "cancelEdit": "取消编辑",
            "listView": "列表视图",
            "gridView": "网格视图",
            "slide": "滑动",
            "slideNumber": "{slideNumber}",
            "zoomImage": "放大图片",
            "zoomIn": "放大",
            "zoomOut": "缩小",
            "rotateRight": "向右旋转",
            "rotateLeft": "向左旋转"
        }
    }
});

app.component('Knob', Knob);
app.component('Accordion', Accordion);
app.component('AccordionTab', AccordionTab);
app.component('Button', Button);
app.component('Card', Card);
app.component('Menubar', Menubar);
app.component('Dialog', Dialog);
app.component('TabView', TabView);
app.component('Calendar', Calendar);
app.component('TabPanel', TabPanel);
app.component('RadioButton', RadioButton);
app.component('InputText', InputText);
app.component('Dropdown', Dropdown);// Dropdown
app.use(router)
app.use(store)

app.mount('#wp-vue-frontend-app')