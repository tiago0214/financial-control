import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/home/HomeView.vue';
import LoginView from '../views/login/RegisterView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomeView,
        },
        {
            path: '/register',
            component: LoginView
        },
    ]
})

router.beforeEach((to, _from, next) => {
    const requeriesAuth = to.matched.some(record => record.meta.requiresAuth);

    // I'll change this to use pinia store
    const isAuthenticated = !!localStorage.getItem('token');

    if(requeriesAuth && !isAuthenticated){
        next('/login')
    }else if(to.path === '/login' && isAuthenticated){
        next('/dashboard')
    }else{
        next()
    }
})

export default router