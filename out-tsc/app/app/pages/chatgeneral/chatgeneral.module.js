import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChatgeneralPageRoutingModule } from './chatgeneral-routing.module';
import { ChatgeneralPage } from './chatgeneral.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
let ChatgeneralPageModule = class ChatgeneralPageModule {
};
ChatgeneralPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            PipesModule,
            ChatgeneralPageRoutingModule
        ],
        declarations: [ChatgeneralPage]
    })
], ChatgeneralPageModule);
export { ChatgeneralPageModule };
//# sourceMappingURL=chatgeneral.module.js.map