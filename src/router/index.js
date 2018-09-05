import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/index';
import Shoes from '@/components/shoes/shoes';
import NewShoe from '@/components/shoes/new-shoe';
import Logs from '@/components/logs/logs';
import NewLog from '@/components/logs/new-log';
import LogsOverview from '@/components/logs/overview';
import LogsByShoes from '@/components/logs/logs-by-shoes';
import Brands from '@/components/brands/brands';
import NewBrand from '@/components/brands/new-brand';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/shoes',
            name: 'Shoes',
            component: Shoes
        },
        {
            path: '/logs',
            name: 'Logs',
            component: Logs,
            children: [
                {
                    path: '/logs/overview',
                    name: 'LogsOverview',
                    component: LogsOverview
                },
                {
                    path: '/logs/by-shoes',
                    name: 'LogsByShoes',
                    component: LogsByShoes
                }
            ]
        },
        {
            path: '/brands',
            name: 'Brands',
            component: Brands
        },
        {
            path: '/shoes/new',
            name: 'NewShoe',
            component: NewShoe
        },
        {
            path: '/logs/new',
            name: 'NewLog',
            component: NewLog
        },

        {
            path: '/brands/new',
            name: 'NewBrand',
            component: NewBrand
        }
    ]
});
