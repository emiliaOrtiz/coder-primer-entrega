import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/models/student.model';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  firstNameControl=new FormControl('');
  lastNameControl=new FormControl('');
  studentForm=new FormGroup({
  firstName: this.firstNameControl,
  lastName:this.lastNameControl,
  });

  constructor(private readonly dialogRef:DialogRef,@Inject(MAT_DIALOG_DATA) public data: Student|null){
    if(data){
      this.studentForm.patchValue(data);
    }
    } 
   
    
  close(
    ) {
      this.dialogRef.close();
    }   

}
