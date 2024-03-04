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
        component: () => import('../modules/repuesto/page/CrearRepuestosPage.vue'),
    },
    {
        path: "/findPart",
        component: () => import('../modules/repuesto/page/ListarRepuestosPage.vue'),
    },
    {
        path: "/newSupplier",
        component: () => import('../modules/proveedor/page/CrearProveedorPage.vue'),
    },
    {
        path: "/findSupplier",
        component: () => import('../modules/proveedor/page/ListarProveedoresPage.vue'),
    }
    
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router 