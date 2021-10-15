import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
const routes = [
    {
        path: '',
        loadChildren: () => import('./index/index.module').then(m => m.IndexPageModule)
    },
    {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule), canActivate: [AuthGuard]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map