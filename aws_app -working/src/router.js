import { createRouter, createWebHistory } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Dashboard from './View/Dashboard.vue';
import Tree from './View/Tree.vue';
const routes = [
    {
        path: '/',
        Name :Navbar,
        component: Navbar
    },
    { 
    path: '/dashboard',
    name: Dashboard, 
    component: Dashboard  
    },
    { 
        path: '/tree',
        name: Tree, 
        component: Tree  },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;