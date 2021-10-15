import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';
import { StartComponent } from './start/start.component';
import { LogoComponent } from './logo/logo.component';
import { MorebtnComponent } from './morebtn/morebtn.component';
let ComponentsModule = class ComponentsModule {
};
ComponentsModule = __decorate([
    NgModule({
        declarations: [SlidesComponent, StartComponent, LogoComponent, MorebtnComponent],
        exports: [SlidesComponent, StartComponent, LogoComponent, MorebtnComponent],
        imports: [
            CommonModule
        ]
    })
], ComponentsModule);
export { ComponentsModule };
//# sourceMappingURL=components.module.js.map