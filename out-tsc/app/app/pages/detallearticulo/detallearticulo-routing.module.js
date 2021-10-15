import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetallearticuloPage } from './detallearticulo.page';
const routes = [
    {
        path: '',
        component: DetallearticuloPage
    }
];
let DetallearticuloPageRoutingModule = class DetallearticuloPageRoutingModule {
};
DetallearticuloPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], DetallearticuloPageRoutingModule);
export { DetallearticuloPageRoutingModule };
//# sourceMappingURL=detallearticulo-routing.module.js.map