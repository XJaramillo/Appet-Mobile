import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RentadosPage } from './rentados.page';
const routes = [
    {
        path: '',
        component: RentadosPage
    }
];
let RentadosPageRoutingModule = class RentadosPageRoutingModule {
};
RentadosPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], RentadosPageRoutingModule);
export { RentadosPageRoutingModule };
//# sourceMappingURL=rentados-routing.module.js.map