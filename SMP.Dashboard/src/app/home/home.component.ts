import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToAddStudentPage() {
    this.router.navigate(['/addstudent']);
  }

  goToListStudentsPage() {
    this.router.navigate(['/student']);
  }
}
