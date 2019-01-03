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

Vue.use(Router)

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
            path: '/todayWarning/todayspread',
            name: 'todaySpread',
            component: TodaySpread,
        }, {
            path: '/todayWarning/todayhigharea',
            name: 'todayhighArea',
            component: TodayHighArea,
        }, {
            path: '/todayWarning/todayhighroad',
            name: 'todayhighRoad',
            component: TodayHighRoad,
        }, {
            path: '/todayWarning/todayhighcrossing',
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
            path: '/earlyWarning/all',
            name: 'all',
            component: All,
        }, {
            path: '/earlyWarning/morningpeak',
            name: 'morningPeak',
            component: MorningPeak,
        }, {
            path: '/earlyWarning/eveningpeak',
            name: 'eveningPeak',
            component: EveningPeak,
        }, {
            path: '/earlyWarning/flatpeak',
            name: 'flatPeak',
            component: FlatPeak,
        }, {
            path: '/earlyWarning/night',
            name: 'night',
            component: Night,
        }]
    },
    {
        path: '/historyWarning',
        name: 'historyWarning',
        component: HistoryWarning,
        redirect: '/historyWarning/yesterday',
        children: [{
            path: '/historyWarning/yesterday',
            name: 'yesterday',
            component: Yesterday,
            redirect: '/historyWarning/yesterday/historyspread',
            children: [{
                path: '/historyWarning/yesterday/historyspread',
                name: 'historySpread',
                component: HistorySpread,
            }, {
                path: '/historyWarning/yesterday/historyhigharea',
                name: 'historyHighArea',
                component: HistoryHighArea,
            }, {
                path: '/historyWarning/yesterday/historyhighroad',
                name: 'historyHighRoad',
                component: HistoryHighRoad,
            }, {
                path: '/historyWarning/yesterday/historyhighcrossing',
                name: 'historyHighCrossing',
                component: HistoryHighCrossing,
            }, {
                path: '/historyWarning/yesterday/weather',
                name: 'weather',
                component: Weather,
            }, {
                path: '/historyWarning/yesterday/vehicle',
                name: 'vehicle',
                component: Vehicle,
            }]
        }, {
            path: '/historyWarning/lastweek',
            name: 'lastWeek',
            component: LastWeek,
            redirect: '/historyWarning/lastweek/historyspread',
            children: [{
                path: '/historyWarning/lastweek/historyspread',
                name: 'historySpread',
                component: HistorySpread,
            }, {
                path: '/historyWarning/lastweek/historyhigharea',
                name: 'historyHighArea',
                component: HistoryHighArea,
            }, {
                path: '/historyWarning/lastweek/historyhighroad',
                name: 'historyHighRoad',
                component: HistoryHighRoad,
            }, {
                path: '/historyWarning/lastweek/historyhighcrossing',
                name: 'historyHighCrossing',
                component: HistoryHighCrossing,
            }, {
                path: '/historyWarning/lastweek/weather',
                name: 'weather',
                component: Weather,
            }, {
                path: '/historyWarning/lastweek/vehicle',
                name: 'vehicle',
                component: Vehicle,
            }]
        }, {
            path: '/historyWarning/lastmonth',
            name: 'lastMonth',
            component: LastMonth,
            redirect: '/historyWarning/lastmonth/historyspread',
            children: [{
                path: '/historyWarning/lastmonth/historyspread',
                name: 'historySpread',
                component: HistorySpread,
            }, {
                path: '/historyWarning/lastmonth/historyhigharea',
                name: 'historyHighArea',
                component: HistoryHighArea,
            }, {
                path: '/historyWarning/lastmonth/historyhighroad',
                name: 'historyHighRoad',
                component: HistoryHighRoad,
            }, {
                path: '/historyWarning/lastmonth/historyhighcrossing',
                name: 'historyHighCrossing',
                component: HistoryHighCrossing,
            }, {
                path: '/historyWarning/lastmonth/weather',
                name: 'weather',
                component: Weather,
            }, {
                path: '/historyWarning/lastmonth/vehicle',
                name: 'vehicle',
                component: Vehicle,
            }]
        }]
    }
]

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