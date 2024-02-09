import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  observable!: Observable<number>;

  constructor() {}

  push() {
    this.observable = new Observable((sub) => {
      sub.next(1);
      sub.next(2);
      sub.next(3);
      sub.next(4);
      setTimeout(() => {
        sub.next(5);
      }, 1000);
      sub.next(6);
    });
  }

  sub1() {
    this.observable.subscribe((value) => {
      console.log('sub1', value);
    });
  }
  sub2() {
    this.observable.subscribe((value) => {
      console.log('sub2', value);
    });
  }
  sub3() {
    this.observable.subscribe((value) => {
      console.log('sub3', value);
    });
  }
}
