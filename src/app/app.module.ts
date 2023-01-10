import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from './modules/my-material/my-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FirstLayoutComponent } from './first-layout/first-layout.component';
import { PagesModuleModule } from './pages/pages-module.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    FirstLayoutComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MyMaterialModule,
    RouterModule,
    AppRoutingModule,
    PagesModuleModule,
    SharedModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
