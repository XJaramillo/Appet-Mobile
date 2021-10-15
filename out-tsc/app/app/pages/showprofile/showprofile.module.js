import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ShowprofilePageRoutingModule } from './showprofile-routing.module';
import { ShowprofilePage } from './showprofile.page';
let ShowprofilePageModule = class ShowprofilePageModule {
};
ShowprofilePageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ShowprofilePageRoutingModule
        ],
        declarations: [ShowprofilePage]
    })
], ShowprofilePageModule);
export { ShowprofilePageModule };
//# sourceMappingURL=showprofile.module.js.map