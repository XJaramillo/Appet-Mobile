import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RentadosPageRoutingModule } from './rentados-routing.module';
import { RentadosPage } from './rentados.page';
let RentadosPageModule = class RentadosPageModule {
};
RentadosPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RentadosPageRoutingModule
        ],
        declarations: [RentadosPage]
    })
], RentadosPageModule);
export { RentadosPageModule };
//# sourceMappingURL=rentados.module.js.map