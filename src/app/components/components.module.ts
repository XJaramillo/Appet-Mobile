import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';
import { StartComponent } from './start/start.component';
import { MorebtnComponent } from './morebtn/morebtn.component';

@NgModule({
  declarations: [SlidesComponent, StartComponent,MorebtnComponent],
  exports: [ SlidesComponent, StartComponent, MorebtnComponent ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
