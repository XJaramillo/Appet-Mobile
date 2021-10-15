import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArticuloeditarPage } from './articuloeditar.page';
const routes = [
    {
        path: '',
        component: ArticuloeditarPage
    }
];
let ArticuloeditarPageRoutingModule = class ArticuloeditarPageRoutingModule {
};
ArticuloeditarPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ArticuloeditarPageRoutingModule);
export { ArticuloeditarPageRoutingModule };
//# sourceMappingURL=articuloeditar-routing.module.js.map