import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/index';
import Shoes from '@/components/shoes/shoes';
import NewShoe from '@/components/shoes/new-shoe';
import Logs from '@/components/logs/logs';
import NewLog from '@/components/logs/new-log';
import Brands from '@/components/brands/brands';
import NewBrand from '@/components/brands/new-brand';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
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
            component: Logs
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
