import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetalleverPageRoutingModule } from './detallever-routing.module';
import { DetalleverPage } from './detallever.page';
let DetalleverPageModule = class DetalleverPageModule {
};
DetalleverPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            DetalleverPageRoutingModule
        ],
        declarations: [DetalleverPage]
    })
], DetalleverPageModule);
export { DetalleverPageModule };
//# sourceMappingURL=detallever.module.js.map