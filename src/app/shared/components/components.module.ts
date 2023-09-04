import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedParticlesComponent } from './animated-particles/animated-particles.component';



@NgModule({
  declarations: [
    AnimatedParticlesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AnimatedParticlesComponent
  ]
})
export class ComponentsModule { }
