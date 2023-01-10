import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cursos } from 'src/app/models/cursos.model';
import { StudentsServiceService } from 'src/app/services/students-service.service';
import { CursoDialogComponent } from './curso-dialog/curso-dialog.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {

addCurso() {
  const dialog=this.dialogService.open(CursoDialogComponent)
  dialog.afterClosed().subscribe((value)=>{
   
    if(value){
      const lastId=this.servicio.students[this.cursos.length-1]?.id;
      
      this.cursos=[...this.cursos,new Cursos(lastId+1,value.name,value.profesor,value.totalAlumn,true)]
    }
  }
    
  )}


buttonStateFuntion() {
throw new Error('Method not implemented.');
}
 
  cursos:Cursos[]=this.servicio.getCursosList();
  displayedColumns=['id','name','profesor','total','isActive','edit','delete']

  constructor(private readonly dialogService: MatDialog,
    private readonly servicio:StudentsServiceService){

  }

removeCurso(curso:Cursos){
  this.cursos=this.cursos.filter((element)=>element.id!==curso.id);
}

  editCurso(curso:Cursos){
    const dialog=this.dialogService.open(CursoDialogComponent,{
      data:this.cursos,
    })
    dialog.afterClosed().subscribe((data)=>{
        if(data){
         this.cursos=this.cursos.map((elem)=>elem.id===curso.id? {...elem,...data}:elem)
        }

      })
  }



}
