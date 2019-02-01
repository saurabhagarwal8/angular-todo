import { Component } from '@angular/core';
import { makeDecorator } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  todos = [{"todo":"Study","done":false},{"todo":"Cleaning","done":false}];
  todo="";

  add(){
    if(this.todo=='' || this.todo==null)
    alert("To-Do Empty!");
    else
    this.todos.push({"todo":this.todo,"done":false})
    console.log(this.todos);
  }

  done(index){
    if(this.todos[index].done==false)
    this.todos[index].done=true;
    else
    this.todos[index].done=false;
    console.log(this.todos)

  }

  remove(index){

      this.todos[index] = null;
      this.todos.splice(index,1);
     console.log("Deleted "+this.todos+index);
  }
}
