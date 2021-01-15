import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Discover from "../views/discover/discover.vue";
import MyPage from "../views/my/myPage.vue";
import Layout from "../layout/layout.vue";
import SingPage from "../views/sing/singPage.vue";
const routes: Array<RouteRecordRaw> = [
    // {
    //     path: "/",
    //     name: "Home",
    //     component: Home
    // },
    {
        path: '/',
        component: Layout,
        name: '',
        redirect: '/discover',
        children: [
            {
                path: 'discover',
                // component: () => import(/* webpackChunkName: "discover" */ '@/views/discover/discover.vue'),
                component: Discover,
                name: 'Discover',
                meta: {
                    title: 'Discover',
                    icon: 'Discover',
                    affix: false
                }
            },
            {
                path: 'my',
                // component: () => import(/* webpackChunkName: "discover" */ '@/views/my-page/myPage.vue'),
                component: MyPage,
                name: 'MyPage',
                meta: {
                    title: 'MyPage',
                    affix: false
                }
            },
            {
                path: 'sing',
                // component: () => import(/* webpackChunkName: "discover" */ '@/views/discover/discover.vue'),
                component: SingPage,
                name: 'SingPage',
                meta: {
                    title: 'SingPage',
                    icon: 'SingPage',
                    affix: false
                }
            }
        ]
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
