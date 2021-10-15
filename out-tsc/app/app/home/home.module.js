import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
let HomePageModule = class HomePageModule {
};
HomePageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            HomePageRoutingModule
        ],
        declarations: [HomePage]
    })
], HomePageModule);
export { HomePageModule };
//# sourceMappingURL=home.module.js.map