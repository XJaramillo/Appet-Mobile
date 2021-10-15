import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SignupPageRoutingModule } from './signup-routing.module';
import { SignupPage } from './signup.page';
let SignupPageModule = class SignupPageModule {
};
SignupPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            IonicModule,
            SignupPageRoutingModule
        ],
        declarations: [SignupPage]
    })
], SignupPageModule);
export { SignupPageModule };
//# sourceMappingURL=signup.module.js.map