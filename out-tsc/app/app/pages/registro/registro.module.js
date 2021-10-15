import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegistroPageRoutingModule } from './registro-routing.module';
import { RegistroPage } from './registro.page';
let RegistroPageModule = class RegistroPageModule {
};
RegistroPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            IonicModule,
            RegistroPageRoutingModule
        ],
        declarations: [RegistroPage]
    })
], RegistroPageModule);
export { RegistroPageModule };
//# sourceMappingURL=registro.module.js.map