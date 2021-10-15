import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChatgeneralPage } from './chatgeneral.page';
const routes = [
    {
        path: '',
        component: ChatgeneralPage
    }
];
let ChatgeneralPageRoutingModule = class ChatgeneralPageRoutingModule {
};
ChatgeneralPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ChatgeneralPageRoutingModule);
export { ChatgeneralPageRoutingModule };
//# sourceMappingURL=chatgeneral-routing.module.js.map