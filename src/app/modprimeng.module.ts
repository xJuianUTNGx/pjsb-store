import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import { SidebarModule } from 'primeng/sidebar'; 
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';

const misModulos: any = [
  ButtonModule,
  CardModule,
  InputTextModule,
  ToastModule,
  SidebarModule,
  DataViewModule,
  TagModule
] ;

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    misModulos
  ],
  exports: [
    misModulos
  ]
})


export class ModprimengModule {
  
 }
