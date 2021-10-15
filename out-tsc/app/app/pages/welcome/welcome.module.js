import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WelcomePageRoutingModule } from './welcome-routing.module';
import { WelcomePage } from './welcome.page';
import { ComponentsModule } from 'src/app/components/components.module';
let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            WelcomePageRoutingModule,
            ComponentsModule
        ],
        declarations: [WelcomePage]
    })
], WelcomePageModule);
export { WelcomePageModule };
//# sourceMappingURL=welcome.module.js.map