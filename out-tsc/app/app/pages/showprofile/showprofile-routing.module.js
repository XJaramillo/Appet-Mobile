import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShowprofilePage } from './showprofile.page';
const routes = [
    {
        path: '',
        component: ShowprofilePage
    }
];
let ShowprofilePageRoutingModule = class ShowprofilePageRoutingModule {
};
ShowprofilePageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ShowprofilePageRoutingModule);
export { ShowprofilePageRoutingModule };
//# sourceMappingURL=showprofile-routing.module.js.map