import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import TodayWarning from '@/components/today/todaywarning'
import EarlyWarning from '@/components/early/earlywarning'
import HistoryWarning from '@/components/history/historywarning'
//二级
import TodaySpread from '@/components/today/todaytabs/todayspread'
import TodayHighArea from '@/components/today/todaytabs/todayhigharea'
import TodayHighRoad from '@/components/today/todaytabs/todayhighroad'
import TodayHighCrossing from '@/components/today/todaytabs/todayhighcrossing'

import All from '@/components/early/earlytabs/all'
import MorningPeak from '@/components/early/earlytabs/morningpeak'
import EveningPeak from '@/components/early/earlytabs/eveningpeak'
import FlatPeak from '@/components/early/earlytabs/flatpeak'
import Night from '@/components/early/earlytabs/night'

import Yesterday from '@/components/history/historytabs/yesterday'
import LastWeek from '@/components/history/historytabs/lastweek'
import LastMonth from '@/components/history/historytabs/lastmonth'

//三级
import HistorySpread from '@/components/history/historytabs/historywarninglinkstabs/historyspread'
import HistoryHighArea from '@/components/history/historytabs/historywarninglinkstabs/historyhigharea'
import HistoryHighRoad from '@/components/history/historytabs/historywarninglinkstabs/historyhighroad'
import HistoryHighCrossing from '@/components/history/historytabs/historywarninglinkstabs/historyhighcrossing'
import Weather from '@/components/history/historytabs/historywarninglinkstabs/weather'
import Vehicle from '@/components/history/historytabs/historywarninglinkstabs/vehicle'

Vue.use(Router);

export const RouterList = [{
    path: '/',
    name: 'Index',
    component: Index
},
    {
        path: '/todayWarning',
        name: 'todayWarning',
        component: TodayWarning,
        redirect: '/todayWarning/todayspread',
        children: [{
            path: 'todayspread',
            name: 'todaySpread',
            component: TodaySpread,
        }, {
            path: 'todayhigharea',
            name: 'todayhighArea',
            component: TodayHighArea,
        }, {
            path: 'todayhighroad',
            name: 'todayhighRoad',
            component: TodayHighRoad,
        }, {
            path: 'todayhighcrossing',
            name: 'todayhighCrossing',
            component: TodayHighCrossing,
        }]
    },
    {
        path: '/earlyWarning',
        name: 'earlyWarning',
        component: EarlyWarning,
        redirect: '/earlyWarning/all',
        children: [{
            path: 'all',
            name: 'all',
            component: All,
        }, {
            path: 'morningpeak',
            name: 'morningPeak',
            component: MorningPeak,
        }, {
            path: 'eveningpeak',
            name: 'eveningPeak',
            component: EveningPeak,
        }, {
            path: 'flatpeak',
            name: 'flatPeak',
            component: FlatPeak,
        }, {
            path: 'night',
            name: 'night',
            component: Night,
        }]
    },
    {
        path: '/historyWarning',
        name: 'historyWarning',
        component: HistoryWarning,
        meta:{name:'yesterday'},
        children: [{
            path: 'yesterday',
            name: 'yesterday',
            component: Yesterday,
            redirect: '/historyWarning/yesterday/historyspread',
            children: [{
                path: 'historyspread',
                name: 'yesterday-historySpread',
                component: HistorySpread,
                meta:{name:'yesterday'},
            }, {
                path: 'historyhigharea',
                name: 'yesterday-historyHighArea',
                component: HistoryHighArea,
                meta:{name:'yesterday'},
            }, {
                path: 'historyhighroad',
                name: 'yesterday-historyHighRoad',
                component: HistoryHighRoad,
                meta:{name:'yesterday'},
            }, {
                path: 'historyhighcrossing',
                name: 'yesterday-historyHighCrossing',
                component: HistoryHighCrossing,
                meta:{name:'yesterday'},
            }, {
                path: 'weather',
                name: 'yesterday-weather',
                component: Weather,
                meta:{name:'yesterday'},
            }, {
                path: 'vehicle',
                name: 'yesterday-vehicle',
                component: Vehicle,
                meta:{name:'yesterday'},
            }]
        }, {
            path: 'lastweek',
            name: 'lastWeek',
            component: LastWeek,
            redirect: '/historyWarning/lastweek/historyspread',
            meta:{name:'lastWeek'},
            children: [{
                path: 'historyspread',
                name: 'lastWeek-historySpread',
                component: HistorySpread,
                meta:{name:'lastWeek'},
            }, {
                path: 'historyhigharea',
                name: 'lastWeek-historyHighArea',
                component: HistoryHighArea,
                meta:{name:'lastWeek'},
            }, {
                path: 'historyhighroad',
                name: 'lastWeek-historyHighRoad',
                component: HistoryHighRoad,
                meta:{name:'lastWeek'},
            }, {
                path: 'historyhighcrossing',
                name: 'lastWeek-historyHighCrossing',
                component: HistoryHighCrossing,
                meta:{name:'lastWeek'},
            }, {
                path: 'weather',
                name: 'lastWeek-weather',
                component: Weather,
                meta:{name:'lastWeek'},
            }, {
                path: 'vehicle',
                name: 'lastWeek-vehicle',
                component: Vehicle,
                meta:{name:'lastWeek'},
            }]
        }, {
            path: 'lastmonth',
            name: 'lastMonth',
            component: LastMonth,
            redirect: '/historyWarning/lastmonth/historyspread',
            meta:{name:'lastMonth'},
            children: [{
                path: 'historyspread',
                name: 'lastMonth-historySpread',
                component: HistorySpread,
                meta:{name:'lastMonth'},
            }, {
                path: 'historyhigharea',
                name: 'lastMonth--historyHighArea',
                component: HistoryHighArea,
                meta:{name:'lastMonth'},
            }, {
                path: 'historyhighroad',
                name: 'lastMonth-historyHighRoad',
                component: HistoryHighRoad,
            }, {
                path: 'historyhighcrossing',
                name: 'lastMonth-historyHighCrossing',
                component: HistoryHighCrossing,
            }, {
                path: 'weather',
                name: 'lastMonth-weather',
                component: Weather,
                meta:{name:'lastMonth'},
            }, {
                path: 'vehicle',
                name: 'lastMonth-vehicle',
                component: Vehicle,
                meta:{name:'lastMonth'},
            }]
        }]
    }
];

export default new Router({
    routes: RouterList,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            // return { x: 0, y: 0 }
        }
    }
})