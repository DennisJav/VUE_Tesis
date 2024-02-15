import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [

    {
        path: "/newClient",
        component: () => import('../components/index.vue'),
    },
    {
        path: "/findClient",
        component: () => import('../components/index.vue'),
    },
    {
        path: "/newOrder",
        component: () => import('../components/index.vue'),
    },
    {
        path: "/findOrder",
        component: () => import('../components/index.vue'),
    },
    {
        path: "/newTecnique",
        component: () => import('../components/index.vue'),
    },
    {
        path: "/findTecnique",
        component: () => import('../components/index.vue'),
    },
    {
        path: "/newPart",
        component: () => import('../components/index.vue'),
    },
    {
        path: "/findPart",
        component: () => import('../components/index.vue'),
    },
    {
        path: "/newSupplier",
        component: () => import('../components/index.vue'),
    },
    {
        path: "/findSupplier",
        component: () => import('../components/index.vue'),
    }
    
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router 