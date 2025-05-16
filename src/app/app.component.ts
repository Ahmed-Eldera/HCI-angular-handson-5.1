import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { StudentDetailsComponent } from "./components/student-details/student-details.component";
import { AddUserComponent } from "./components/add-user/add-user.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent, StudentDetailsComponent, AddUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'handson-5.1';
}
