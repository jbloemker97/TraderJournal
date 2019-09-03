import Vue from 'vue';
import Router from 'vue-router';
import Strategy from '../components/Strategy';
import Home from '../components/Home';
import Register from '../components/Register';
import Login from '../components/Login';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/strategy',
            name: 'Strategy',
            component: Strategy
        },
        {
            path: '/user/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/user/login',
            name: 'Login',
            component: Login
        }
    ],
});