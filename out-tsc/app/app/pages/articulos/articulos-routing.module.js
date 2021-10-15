import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArticulosPage } from './articulos.page';
const routes = [
    {
        path: '',
        component: ArticulosPage
    }
];
let ArticulosPageRoutingModule = class ArticulosPageRoutingModule {
};
ArticulosPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ArticulosPageRoutingModule);
export { ArticulosPageRoutingModule };
//# sourceMappingURL=articulos-routing.module.js.map