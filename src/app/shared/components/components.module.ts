import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradientBGComponent } from './gradient-bg/gradient-bg.component';



@NgModule({
  declarations: [
    GradientBGComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    GradientBGComponent
  ]
})
export class ComponentsModule { }
