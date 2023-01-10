import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos/cursos.component';
import { MyMaterialModule } from '../modules/my-material/my-material.module';
import { CursoDialogComponent } from './cursos/curso-dialog/curso-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { StartPageComponent } from './start-page/start-page.component';
import { StudentsPageComponent } from './students-page/students-page.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CursosComponent,
    CursoDialogComponent,
    LoginComponent,
    StartPageComponent,
    StudentsPageComponent,
    StudentDetailComponent,

  ],
  imports: [
    CommonModule,
    MyMaterialModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports:[
    CursosComponent,
    CursoDialogComponent,
    LoginComponent,
    StartPageComponent,
    StudentsPageComponent,
    StudentDetailComponent,
  ]
})
export class PagesModuleModule { }
