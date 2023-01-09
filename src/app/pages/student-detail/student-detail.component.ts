import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentsServiceService } from 'src/app/services/students-service.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent  implements OnInit{

  public  estudiante:Student=this.service.getStudentsById(1);

  constructor(private readonly route:ActivatedRoute,
    private readonly service:StudentsServiceService,
    ){
       
  }

  getStudent():Student{
    return this.service.getStudentsById(1);
    
  }
  ngOnInit(): void {
  
     this.route.params.subscribe((params)=>{
     console.log(params);
     console.log(this.service.getStudentsById(params['id']))
    });
   
  }
}
