import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student-list/student-list.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  providers: [MessageService]
})
export class StudentListComponent implements OnInit {
  students = [
    { firstName: 'John', lastName: 'Doe', studentNumber: 1234 },
    { firstName: 'Jane', lastName: 'Smith', studentNumber: 5678 },
    { firstName: 'Alice', lastName: 'Johnson', studentNumber: 91011 },
    // Diğer öğrenciler...
  ];

  constructor(private studentService: StudentService,private messageService: MessageService) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents().subscribe(
      (data) => {
        this.students = data;
      },
      (error) => {
        this.show('Error', 'Failed to retrieve student data.','Error');
      }
    );
  }

  show(_severity:string,_detail:string,_summary:string) {
    this.messageService.add({ severity: _severity, summary: _summary, detail: _detail });
  }
  
  
}
