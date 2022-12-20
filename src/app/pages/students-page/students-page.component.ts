import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from 'src/app/models/student.model';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent {
  students: Student[]=[
    new Student(1,'Taehyung','Kim',true),
    new Student(2,'Namjoon','Kim',true),
    new Student(3,'Junsu','Kim',true),
    new Student(4,'Jaejoong','Kim',true),
    new Student(5,'Leonardo','Dicaprio',true),
    new Student(6,'Nick','Carter',true),
    new Student(7,'Brian','Littrell',true),


  ];
  displayedColumns=['id','firstName','lastName','isActive','edit','delete']

  //the status of the button is disabled when the user is log out
    //and when dont have the proper rights
  private  buttonState:boolean=false;
  constructor(private readonly dialogService: MatDialog){
    
  }

  public buttonStateFuntion():boolean{
    return this.buttonState;
  }
  

  addStudent(){
    const dialog=this.dialogService.open(DialogComponent)
    dialog.afterClosed().subscribe((value)=>{
     
      if(value){
        const lastId=this.students[this.students.length-1]?.id;
        
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