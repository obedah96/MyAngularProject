import { outputAst } from '@angular/compiler';
import { Component,EventEmitter,Input, Output } from '@angular/core';
import Todo from 'src/app/Models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-onetodo',
  templateUrl: './onetodo.component.html',
  styleUrls: ['./onetodo.component.css']
})
export class OnetodoComponent {

  @Input() todo:any={};
  @Output() toggleEvent= new EventEmitter();
  @Output() deleteEvent= new EventEmitter();
  constructor(){}
  toggle(todo: Todo){
    this.toggleEvent.emit(todo);
  }
  delete(todo: Todo){
      this.deleteEvent.emit(todo);
  }

}
