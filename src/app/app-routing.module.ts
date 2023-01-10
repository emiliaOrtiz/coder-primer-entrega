import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { LoginComponent } from './pages/login/login.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { FirstLayoutComponent } from './first-layout/first-layout.component';
import { StudentDetailComponent } from './pages/student-detail/student-detail.component';

const routes: Routes=[
 
  {
    path:'',
    component:AppComponent,
    children:[
      {
        path:'students',
        component:StudentsPageComponent
      },
      {
        path:'cursos',
        component:CursosComponent
      },
      {
        path:'students/:id',
        component:StudentDetailComponent
      },
      {
        path:'**',
        component:StartPageComponent
      }
      
    ]
  },
  //LOG IN
  {
    path:'auth',
    component:FirstLayoutComponent,
    children:[{
      path:'login',
      component:StartPageComponent
    },
    {
      path:'**',
      redirectTo:'login'
    }

    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
