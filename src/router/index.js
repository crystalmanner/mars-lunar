import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '../pages/Dashboard.vue'
import AllProducts from '../pages/AllProducts.vue'
import AllPOs from '../pages/AllPOs.vue'

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: Dashboard,
            meta: {
                breadcrumb: [
                    { name: 'dashboard' }
                ]
            }
        },
        {
            path: '/all-products',
            name: 'AllProducts',
            component: AllProducts,
            meta: {
                breadcrumb: [
                    { name: 'all products' }
                ]
            }
        },
        {
            path: '/all-pos',
            name: 'AllPOs',
            component: AllPOs,
            meta: {
                breadcrumb: [
                    { name: 'all pos' }
                ]
            }
        },
    ]
});

export default router;
