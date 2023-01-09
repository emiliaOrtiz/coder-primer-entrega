import { Injectable } from '@angular/core';
import { Cursos } from '../models/cursos.model';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsServiceService {

  students: Student[]=[
    new Student(1,'Taehyung','Kim',true),
    new Student(2,'Namjoon','Kim',true),
    new Student(3,'Junsu','Kim',true),
    new Student(4,'Jaejoong','Kim',true),
    new Student(5,'Leonardo','Dicaprio',true),
    new Student(6,'Nick','Carter',true),
    new Student(7,'Brian','Littrell',true),

  ];
  cursos:Cursos[]=[
    new Cursos(1,'Matematicas','Lucas kim',Number(40),true),
    new Cursos(2,'Analisis matematico','Lucas kim',Number(43),true),

  ];
    
  
  constructor() { }

public getStudentsList():Student[]{
  return this.students;
}

public getCursosList():Cursos[]{
    return this.cursos;
}

  getStudentsById(id: string|number){
    return new Student(Number(id),'Taehyung','Kim',true)
  }
}
