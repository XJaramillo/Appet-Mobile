import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IndexPageRoutingModule } from './index-routing.module';
import { IndexPage } from './index.page';
let IndexPageModule = class IndexPageModule {
};
IndexPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            IndexPageRoutingModule
        ],
        declarations: [IndexPage]
    })
], IndexPageModule);
export { IndexPageModule };
//# sourceMappingURL=index.module.js.map