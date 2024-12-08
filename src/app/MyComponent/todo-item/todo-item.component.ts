import { Component,OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo:Todo;
  @Input() i : number;
  @Output() todoDelete = new EventEmitter<Todo>();
  @Output() todoCheckbox= new EventEmitter();
      constructor(){}
      ngOnInit(): void {

      }
      onClick(todo : Todo){
        this.todoDelete.emit(todo);
        console.log("Delte has been triggered")
      }
      onCheckboxClick(todo:Todo){
        this.todoCheckbox.emit(todo);

      }
}
