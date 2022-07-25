import { Component } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos$: Observable<any>;
  constructor(firestore: Firestore) {
    const collect = collection(firestore, 'items');
    this.todos$ = collectionData(collect);

    this.todos$.subscribe( (newTodo) =>{

    console.log('new :', newTodo);

    } );

   
}
}
