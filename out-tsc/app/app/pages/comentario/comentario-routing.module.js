import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComentarioPage } from './comentario.page';
const routes = [
    {
        path: '',
        component: ComentarioPage
    }
];
let ComentarioPageRoutingModule = class ComentarioPageRoutingModule {
};
ComentarioPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ComentarioPageRoutingModule);
export { ComentarioPageRoutingModule };
//# sourceMappingURL=comentario-routing.module.js.map