import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComentarioPageRoutingModule } from './comentario-routing.module';
import { ComentarioPage } from './comentario.page';
let ComentarioPageModule = class ComentarioPageModule {
};
ComentarioPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            IonicModule,
            ComentarioPageRoutingModule
        ],
        declarations: [ComentarioPage]
    })
], ComentarioPageModule);
export { ComentarioPageModule };
//# sourceMappingURL=comentario.module.js.map