import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MyMaterialModule } from '../modules/my-material/my-material.module';
import { DialogComponent } from './dialog/dialog.component';
import { HeaderComponent } from './layout/header/header.component';
import { PageWrapperComponent } from './layout/page-wrapper/page-wrapper.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DialogComponent,
    HeaderComponent,
    PageWrapperComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    MyMaterialModule,
    ReactiveFormsModule,
  ],
  exports:[
    DialogComponent,
    HeaderComponent,
    PageWrapperComponent,
  ]
})
export class SharedModule { }
