import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetallearticuloPageRoutingModule } from './detallearticulo-routing.module';
import { DetallearticuloPage } from './detallearticulo.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
let DetallearticuloPageModule = class DetallearticuloPageModule {
};
DetallearticuloPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            PipesModule,
            DetallearticuloPageRoutingModule
        ],
        declarations: [DetallearticuloPage]
    })
], DetallearticuloPageModule);
export { DetallearticuloPageModule };
//# sourceMappingURL=detallearticulo.module.js.map