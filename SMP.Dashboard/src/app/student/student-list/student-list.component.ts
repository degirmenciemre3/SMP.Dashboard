import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student-list/student-list.service';
import { MessageService } from 'primeng/api';
import { Student } from '../interface/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  providers: [MessageService]
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  selectedStudent:any;
  availableClasses: any[] = [];
  selectedClass: any;
  constructor(private studentService: StudentService,private messageService: MessageService) {}

  ngOnInit(): void {
    this.getAvailableClasses();
    this.getStudents();
  }

  async getStudents(): Promise<void> {
    try {
      const data = await this.studentService.getStudents().toPromise();
      if (data) {
        this.students = data as Student[];
      } else {
          throw new Error('Student data is undefined.');
      }
    } catch (error) {
      this.show('Error', 'Failed to retrieve student data.', 'Error');
    }
  }

  show(_severity:string,_detail:string,_summary:string) {
    this.messageService.add({ severity: _severity, summary: _summary, detail: _detail });
  }

  openInfoPage(id:number){
    this.selectedStudent = this.students.find(x => x.id == id);
  }
  
  getAvailableClasses(): void {
    this.studentService.getAvailableClasses().subscribe(
      (data) => {
        this.availableClasses = data;
        console.log(this.availableClasses);
      },
      (error) => {
        this.show('Error', 'Failed to retrieve classes data.','Error');
      }
    );
  }

  async assignClass() {
    if (!this.selectedClass) {
      this.show('Error', 'Bir ders seçmelisiniz.','Error');
      return;
    }
    let body ={
      "StudentId": this.selectedStudent.id,
      "ClassId":this.selectedClass.classId
    }
    await this.studentService.assignClass(body).subscribe(
      async(response) => {
        this.show('Success', 'Ders başarıyla atanmıştır','Success');
        await this.getStudents();
        this.selectedStudent = await this.students.find(x => x.id == body.StudentId);
      },
      (error) => {
        this.show('Error', 'Ders atılırken bir hata oluştu.','Error');
      }
    );
  }
  async removeClass(selectedClassId:number){
    console.log(selectedClassId)
    let body ={
      "StudentId": this.selectedStudent.id,
      "ClassId":selectedClassId
    }
    await this.studentService.removeClass(body).subscribe(
      async(response) => {
        this.show('Success', 'Ders başarıyla kaldırılmıştır','Success');
        await this.getStudents();
        this.selectedStudent = await this.students.find(x => x.id == body.StudentId);
      },
      (error) => {
        this.show('Error', 'Ders kaldırılırken bir hata oluştu.','Error');
      }
    );
  }
  
}
