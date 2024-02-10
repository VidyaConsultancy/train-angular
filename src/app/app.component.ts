import { Component } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

type Emp = {
  dept: string;
};

type TPerson = {
  fname: string;
  lname: string;
  emp: Emp;
  greet: () => void;
};

interface IPerson {
  fname: string;
  lname: string;
  greet: () => void;
}

class Person {
  fname!: string;
  lname!: string;
  greet() {
    console.log('hello world');
  }
}

function add<T>(a: T): T {
  return a;
}

add<number>(1);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  observable!: Observable<number>;
  subject!: Subject<number>;
  bSubject: BehaviorSubject<number>;
  /**
   * Primitive
   * string
   * number
   * boolean
   * null
   * undefined
   * any
   *
   * Collection
   * Array
   * Object/Instance
   * Set
   * Map
   * WeakMap
   * WeakSet
   *
   * enum
   * type
   * interface
   */
  person: {
    fname: string;
    lname: string;
  } = {
    fname: 'John',
    lname: 'Doe',
  };
  genObj!: Generator;

  constructor() {
    this.subject = new Subject();
    this.bSubject = new BehaviorSubject(0);

    function* gen() {
      yield 1;
      yield 2;
      yield 3;
      yield 4;
    }
    this.genObj = gen();
  }

  push() {
    this.bSubject.next(this.genObj.next().value);
    // this.subject.next(this.genObj.next().value);
    // this.observable = new Observable((sub) => {
    //   sub.next(1);
    //   sub.next(2);
    //   sub.next(3);
    //   sub.next(4);
    //   setTimeout(() => {
    //     sub.next(5);
    //   }, 1000);
    //   sub.complete();
    //   sub.next(6);
    // });
  }

  getSubjectValue() {
    // console.log(this.subject)
  }

  sub1() {
    this.bSubject.subscribe((value) => {
      console.log('sub1', value);
    });
    // this.observable.subscribe((value) => {
    //   console.log('sub1', value);
    // });
  }
  sub2() {
    this.bSubject.subscribe((value) => {
      console.log('sub2', value);
    });
    // this.observable.subscribe((value) => {
    //   console.log('sub2', value);
    // });
  }
  sub3() {
    this.bSubject.subscribe((value) => {
      console.log('sub3', value);
    });
    // this.observable.subscribe((value) => {
    //   console.log('sub3', value);
    // });
  }
}
