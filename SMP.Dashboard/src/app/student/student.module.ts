import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { TooltipModule } from 'primeng/tooltip';
import { FieldsetModule } from 'primeng/fieldset';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddStudentComponent,StudentListComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastModule,
    ButtonModule,
    TableModule,
    CardModule,
    FormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    TooltipModule,
    FieldsetModule,
    ReactiveFormsModule
  ],
  exports:[AddStudentComponent,StudentListComponent]
})
export class StudentModule { }
