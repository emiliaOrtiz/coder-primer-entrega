import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { HeaderComponent } from './layout/header/header.component';
import { PageWrapperComponent } from './layout/page-wrapper/page-wrapper.component';
import { MyMaterialModule } from '../modules/my-material/my-material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DialogComponent,
    PageWrapperComponent,
    

  ],
  imports: [
    CommonModule,
    MyMaterialModule,
    ReactiveFormsModule,
  ],
  exports:[
    DialogComponent,
    ReactiveFormsModule,
    MyMaterialModule,

  ]
})
export class SharedModule { }
