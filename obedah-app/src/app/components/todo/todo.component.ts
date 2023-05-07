import { Component } from '@angular/core';
import Todo from 'src/app/Models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

      Todos!: Todo[];
      constructor(private todoservice:TodoService){}
      ngOnInit():void{
        this.todoservice.getTodos(5).subscribe(Todos=>{this.Todos=Todos});

      }
      toggleTodo(todo:any){
          todo.completed=! todo.completed;
          this.updatetodo(todo);
      }

      updatetodo(todo:any){
        this.todoservice.update(todo).subscribe(()=>{
            this.Todos=this.Todos.map(item=>{
              if(todo.id===item.id){return todo;}
              return item;
            });
        });
      }
      deleteTodo(todo:Todo){
        this.todoservice.delete(todo.id).subscribe(()=>{
        this.Todos=this.Todos.filter(item=>{
            return item!==todo;
        });
      });
    }

    AddTodo(todo:any)
    {
      this.todoservice.add(todo).subscribe((newtodo)=>{

      this.Todos.push(newtodo);

      });
    }
}
