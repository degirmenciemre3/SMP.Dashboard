import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label:"SMP.Dashboard",
        routerLink: '/',
      },
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/',
      },
      {
        label: 'New Student',
        icon: 'pi pi-fw pi-user-plus',
        routerLink: '/addstudent',
      },
      {
        label: 'List Students',
        icon: 'pi pi-fw pi-users',
        routerLink: '/student',
      },
      {
        label: 'Classes',
        icon: 'pi pi-fw pi-database',
        routerLink: '/classes',
      }
    ];
  }
}
