import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cursos } from 'src/app/models/cursos.model';

@Component({
  selector: 'app-curso-dialog',
  templateUrl: './curso-dialog.component.html',
  styleUrls: ['./curso-dialog.component.scss']
})
export class CursoDialogComponent {
  nameControl=new FormControl('');
  profesorControl=new FormControl('');
  cursoForm=new FormGroup({
  name: this.nameControl,
  profesor:this.profesorControl,
  });

  constructor(private readonly dialogRef:DialogRef,@Inject(MAT_DIALOG_DATA) public data: Cursos){
    if(data){
      this.cursoForm.patchValue(data);
    }
    } 
   
    
  close(
    ) {
      this.dialogRef.close();
    }  
}
