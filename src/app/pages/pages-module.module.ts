import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos/cursos.component';
import { MyMaterialModule } from '../modules/my-material/my-material.module';
import { CursoDialogComponent } from './cursos/curso-dialog/curso-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    CursosComponent,
    CursoDialogComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    MyMaterialModule,
    ReactiveFormsModule,
  ],
  exports:[
    CursosComponent,
    CursoDialogComponent,
    LoginComponent,
  ]
})
export class PagesModuleModule { }
