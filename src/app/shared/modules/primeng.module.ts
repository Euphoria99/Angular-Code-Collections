import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//components starts from here
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    //import like this
    ButtonModule,
    CardModule
  ],
  exports:[
    BrowserModule,
    BrowserAnimationsModule,
    //export like this
    ButtonModule,
    CardModule
  ]
})
export class PrimengModule { }
