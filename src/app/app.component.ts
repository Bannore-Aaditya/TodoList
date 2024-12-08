import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './MyComponent/todos/todos.component';
import { Todo } from './Todo';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm,NgModel } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodosComponent,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myAngularApp';
  constructor(){
    setTimeout(() => {
      this.title = "changed title";
    }, 2000);
  }
}
