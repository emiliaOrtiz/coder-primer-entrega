import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/layout/header/header.component';
import { PageWrapperComponent } from './shared/layout/page-wrapper/page-wrapper.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { MyMaterialModule } from './modules/my-material/my-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule} from '@angular/material/list';
import { MatExpansionModule} from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { FirstLayoutComponent } from './first-layout/first-layout.component';
import { StudentDetailComponent } from './pages/student-detail/student-detail.component';
import { DialogComponent } from './shared/dialog/dialog.component';
import { PagesModuleModule } from './pages/pages-module.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageWrapperComponent,
    StudentsPageComponent,
    StartPageComponent,
    FirstLayoutComponent,
    StudentDetailComponent,
    DialogComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MyMaterialModule,
    RouterModule,
    AppRoutingModule,
    PagesModuleModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
