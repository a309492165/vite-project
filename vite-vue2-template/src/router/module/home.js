// /src/router/module/home.js
export const home = [
    {
        path: '/home',
        meta: { title: '首页' },
        component: () => import('@/views/home/Index.vue')
    }
]
