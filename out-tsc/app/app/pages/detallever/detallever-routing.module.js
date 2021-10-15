import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetalleverPage } from './detallever.page';
const routes = [
    {
        path: '',
        component: DetalleverPage
    }
];
let DetalleverPageRoutingModule = class DetalleverPageRoutingModule {
};
DetalleverPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], DetalleverPageRoutingModule);
export { DetalleverPageRoutingModule };
//# sourceMappingURL=detallever-routing.module.js.map