import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from 'src/app/models/student.model';
import { StudentsServiceService } from 'src/app/services/students-service.service';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent {
 
  students:Student[]=this.servicio.getStudentsList();
  displayedColumns=['id','firstName','lastName','isActive','edit','delete']

  //the status of the button is disabled when the user is log out
    //and when dont have the proper rights
  private  buttonState:boolean=false;
  constructor(private readonly dialogService: MatDialog,
    private readonly servicio:StudentsServiceService){
    
  }

  public buttonStateFuntion():boolean{
    return this.buttonState;
  }
  

  addStudent(){
    const dialog=this.dialogService.open(DialogComponent)
    dialog.afterClosed().subscribe((value)=>{
     
      if(value){
        const lastId=this.servicio.students[this.students.length-1]?.id;
        
        this.students=[...this.students,new Student(lastId+1,value.firstName,value.lastName,true)]
      }
    }
      
    )}

  removeStudent(student:Student){
    this.students=this.students.filter((element)=>element.id!==student.id);
  }

    editStudent(student:Student){
      const dialog=this.dialogService.open(DialogComponent,{
        data:student,
      })
      dialog.afterClosed().subscribe((data)=>{
          if(data){
           this.students=this.students.map((elem)=>elem.id===student.id? {...elem,...data}:elem)
          }

        })
    }

    OnInit(){
      this.buttonState=false;
    }

  
}