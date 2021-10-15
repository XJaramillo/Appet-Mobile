import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegistroPage } from './registro.page';
const routes = [
    {
        path: '',
        component: RegistroPage
    }
];
let RegistroPageRoutingModule = class RegistroPageRoutingModule {
};
RegistroPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], RegistroPageRoutingModule);
export { RegistroPageRoutingModule };
//# sourceMappingURL=registro-routing.module.js.map