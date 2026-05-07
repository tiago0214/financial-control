import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/home/HomePage.vue';
import RegisterPage from '../views/register/RegisterPage.vue';
import LoginPage from '../views/login/LoginPage.vue';
import PageLayout from '../views/layout/PageLayout.vue';
import { useAuthStore } from '../stores/auth';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage,
        },
        {
            path: '/register',
            component: RegisterPage
        },
        {
            path: '/login',
            component: LoginPage
        },
        {
            path: '/app',
            component: PageLayout,
            meta: { requiresAuth: true },
            children:[
                {
                    path: 'dashboard',
                    component: () => import('../views/dashboard/DashboardPage.vue'),
                },
                {
                    path: 'goals',
                    component: () => import('../views/goals/GoalsPage.vue'),
                },
                {
                    path: 'transactions',
                    component: () => import('../views/transactions/TransactionsPage.vue'),
                },
                // {
                //     path: 'cards',
                //     component: () => import('../views/cards/CardsPage.vue'),
                // }
            ]
        }
    ]
})

router.beforeEach((to, _from, next) => {
    const requeriesAuth = to.matched.some(record => record.meta.requiresAuth);

    const authStore = useAuthStore();
    
    const isAuthenticated = authStore.isAuthenticated;

    if(requeriesAuth && !isAuthenticated){
        next('/login')
    }else if((to.path === '/login' || to.path === '/register') && isAuthenticated){
        next('/app/dashboard')
    }else{
        next()
    }
})

export default router