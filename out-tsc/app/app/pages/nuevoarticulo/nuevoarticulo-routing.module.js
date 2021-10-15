import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NuevoarticuloPage } from './nuevoarticulo.page';
const routes = [
    {
        path: '',
        component: NuevoarticuloPage
    }
];
let NuevoarticuloPageRoutingModule = class NuevoarticuloPageRoutingModule {
};
NuevoarticuloPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], NuevoarticuloPageRoutingModule);
export { NuevoarticuloPageRoutingModule };
//# sourceMappingURL=nuevoarticulo-routing.module.js.map