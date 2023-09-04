import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimGradientBGComponent } from './anim-gradient-bg/anim-gradient-bg.component';



@NgModule({
  declarations: [
    AnimGradientBGComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AnimGradientBGComponent
  ]
})
export class ComponentsModule { }
