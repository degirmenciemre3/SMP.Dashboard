import { Component,OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ClassesService } from './classes.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css',
  providers: [MessageService]
})
export class ClassesComponent implements OnInit{
  availableClasses:any;
  selectedClass:string="";
  constructor(private classesService: ClassesService,private messageService: MessageService){};

  ngOnInit(): void {
    this.getAvailableClasses();
  }

  show(_severity:string,_detail:string,_summary:string) {
    this.messageService.add({ severity: _severity, summary: _summary, detail: _detail });
  }

  getAvailableClasses(): void {
    this.classesService.getAvailableClasses().subscribe(
      (data) => {
        this.availableClasses = data;
      },
      (error) => {
        this.show('Error', 'Failed to retrieve classes data.','Error');
      }
    );
  }

  deleteClass(classesId:number){
    this.classesService.deleteClass(classesId).subscribe(
      (data) =>{
        this.show('Success', 'Ders başarıyla silindi','Success');
      },
      (error) => {
        this.show('Error', 'Failed to retrieve classes data.','Error');
      }
    )
  }
}
