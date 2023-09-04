import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiamondparticlesComponent } from './diamondparticles/diamondparticles.component';
import { NgParticlesModule } from 'ng-particles';


@NgModule({
  declarations: [
    DiamondparticlesComponent
  ],
  imports: [
    CommonModule,
    NgParticlesModule
  ],
  exports:[NgParticlesModule, DiamondparticlesComponent]
})
export class ComponentsModule { }
