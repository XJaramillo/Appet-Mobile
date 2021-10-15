import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignupPage } from './signup.page';
const routes = [
    {
        path: '',
        component: SignupPage
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], SignupPageRoutingModule);
export { SignupPageRoutingModule };
//# sourceMappingURL=signup-routing.module.js.map