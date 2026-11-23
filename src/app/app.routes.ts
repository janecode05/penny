import { Routes } from '@angular/router';
import { Login } from './login/login/login';
import { Dashboard } from './dashboard/dashboard/dashboard';
import { Createlogin } from './createlogin/createlogin/createlogin';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'create-login',
        component: Createlogin
    },
    {
        path: 'dashboard',
        component: Dashboard
    }
];
