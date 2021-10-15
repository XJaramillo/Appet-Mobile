import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
import { SignoutGuard } from '../guards/signout.guard';
const routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'tab1',
                loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule), canActivate: [SignoutGuard]
            },
            {
                path: 'tab2',
                loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule), canActivate: [SignoutGuard]
            },
            {
                path: 'tab3',
                loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule), canActivate: [SignoutGuard]
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], TabsPageRoutingModule);
export { TabsPageRoutingModule };
//# sourceMappingURL=tabs-routing.module.js.map