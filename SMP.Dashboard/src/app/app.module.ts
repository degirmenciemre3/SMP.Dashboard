import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StudentModule } from './student/student.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastModule } from 'primeng/toast';
import { NavbarComponent } from './navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { TooltipModule } from 'primeng/tooltip';
import { FieldsetModule } from 'primeng/fieldset';
import { MessageService } from 'primeng/api';
import { ReactiveFormsModule } from '@angular/forms';
import { ClassesComponent } from './classes/classes.component';
import { DropdownModule } from 'primeng/dropdown';
import { DividerModule } from 'primeng/divider';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ClassesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule,
    HttpClientModule,
    ButtonModule,
    NgbModule,
    ToastModule,
    MenubarModule,
    TableModule,
    CardModule,
    FormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    TooltipModule,
    FieldsetModule,
    ReactiveFormsModule,
    DropdownModule,
    DividerModule,
    ToolbarModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent,NavbarComponent]
})
export class AppModule { }
