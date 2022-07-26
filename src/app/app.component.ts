import { Component } from '@angular/core';
import { Firestore, collectionData, collection, setDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firebase-todolist';
  todos$: Observable<any>;
  todos: Array<any>;
  todotext: string = '';

  constructor(public firestore: Firestore) {
    const collect = collection(firestore, 'todos');
    this.todos$ = collectionData(collect);

    this.todos$.subscribe( (newTodos) => {
      this.todos = newTodos;
      console.log(newTodos);
    });
}

addTodo(){
  const collect = collection(this.firestore, 'todos');
  setDoc(doc(collect), {name: this.todotext});
}
 



}
