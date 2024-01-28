import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student-list/student-list.service';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css',
  providers: [MessageService]
})
export class AddStudentComponent implements OnInit{
  studentForm: FormGroup = {} as FormGroup;

  constructor(private studentService: StudentService, private messageService: MessageService,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.studentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      studentNumber: ['', Validators.required],
    });
  }
  FirstName:string = "";
  LastName:string = "";
  StudentNumber:string= "";
  addStudent() {
    var payload = {
      firstName:this.FirstName,
      lastName:this.LastName,
      studentNumber:this.StudentNumber 
    }
    console.log(payload)
    this.studentService.addStudent(payload).subscribe(
      (response) => {
        this.show('Success', 'Öğrenci başarıyla eklendi','Success');
      },
      (error) => {
        this.show('Error', 'Öğrenci eklenirken bir hata oluştu','Error');
      }
    );
  }

  show(_severity:string,_detail:string,_summary:string) {
    this.messageService.add({ severity: _severity, summary: _summary, detail: _detail });
  }
}
