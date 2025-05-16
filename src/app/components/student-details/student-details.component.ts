import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {
  username: string = '-';
  submit: boolean = false;
  addNewUser() {

    this.submit = true;
  }
  reset(){
        this.username = '';
            this.submit = false;
  }
  edit(username: string) {

    this.username = username;
    this.submit = false;
  } 
}