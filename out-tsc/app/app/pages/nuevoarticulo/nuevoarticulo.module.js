import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NuevoarticuloPageRoutingModule } from './nuevoarticulo-routing.module';
import { NuevoarticuloPage } from './nuevoarticulo.page';
let NuevoarticuloPageModule = class NuevoarticuloPageModule {
};
NuevoarticuloPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            IonicModule,
            NuevoarticuloPageRoutingModule
        ],
        declarations: [NuevoarticuloPage]
    })
], NuevoarticuloPageModule);
export { NuevoarticuloPageModule };
//# sourceMappingURL=nuevoarticulo.module.js.map