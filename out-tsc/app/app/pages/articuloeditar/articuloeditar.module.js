import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ArticuloeditarPageRoutingModule } from './articuloeditar-routing.module';
import { ArticuloeditarPage } from './articuloeditar.page';
let ArticuloeditarPageModule = class ArticuloeditarPageModule {
};
ArticuloeditarPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ReactiveFormsModule,
            ArticuloeditarPageRoutingModule
        ],
        declarations: [ArticuloeditarPage]
    })
], ArticuloeditarPageModule);
export { ArticuloeditarPageModule };
//# sourceMappingURL=articuloeditar.module.js.map