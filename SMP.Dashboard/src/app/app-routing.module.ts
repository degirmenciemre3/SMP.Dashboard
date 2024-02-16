import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student/student-list/student-list.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "",
    component:HomeComponent
  },
  {
    path: "student",
    component:StudentListComponent
  },
  {
    path:"addstudent",
    component:AddStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
