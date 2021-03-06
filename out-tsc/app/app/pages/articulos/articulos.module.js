import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ArticulosPageRoutingModule } from './articulos-routing.module';
import { ArticulosPage } from './articulos.page';
import { MorebtnComponent } from 'src/app/components/morebtn/morebtn.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
let ArticulosPageModule = class ArticulosPageModule {
};
ArticulosPageModule = __decorate([
    NgModule({
        entryComponents: [
            MorebtnComponent
        ],
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            PipesModule,
            ArticulosPageRoutingModule,
            ComponentsModule
        ],
        declarations: [ArticulosPage]
    })
], ArticulosPageModule);
export { ArticulosPageModule };
//# sourceMappingURL=articulos.module.js.map