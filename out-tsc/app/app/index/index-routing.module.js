import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IndexPage } from './index.page';
import { SignoutGuard } from '../guards/signout.guard';
import { RegistroGuard } from '../guards/registro.guard';
const routes = [
    {
        path: '',
        component: IndexPage,
        //se cargar las paginas de login
        children: [
            {
                path: '',
                loadChildren: () => import('../pages/welcome/welcome.module').then(m => m.WelcomePageModule)
            },
            {
                path: 'login',
                loadChildren: () => import('../pages/login/login.module').then(m => m.LoginPageModule), canActivate: [SignoutGuard]
            },
            {
                path: 'signup',
                loadChildren: () => import('../pages/signup/signup.module').then(m => m.SignupPageModule), canActivate: [SignoutGuard]
            },
            {
                path: 'registro',
                loadChildren: () => import('../pages/registro/registro.module').then(m => m.RegistroPageModule), canActivate: [RegistroGuard]
            },
            {
                path: 'profile',
                loadChildren: () => import('../pages/profile/profile.module').then(m => m.ProfilePageModule)
            }
        ]
    }
];
let IndexPageRoutingModule = class IndexPageRoutingModule {
};
IndexPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], IndexPageRoutingModule);
export { IndexPageRoutingModule };
//# sourceMappingURL=index-routing.module.js.map