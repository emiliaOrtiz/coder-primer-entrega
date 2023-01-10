import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatInputModule,
    MatExpansionModule,
    MatTooltipModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
  ]
})
export class MyMaterialModule { }
