import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { PrimengModule } from 'src/app/shared/modules/primeng.module';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { ComponentThreeComponent } from './component-three/component-three.component';


@NgModule({
  declarations: [
    HomeComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    ComponentThreeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    PrimengModule
  ],
  exports:[
    HomeComponent,
]
})
export class HomeModule { }
