import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: ['h1 { color: tomato}', ''],
  // template: `<h1>Hello world!</h1>`,
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  appTitle: string = 'Reactive Burger';
  ingredients: Array<string>;
  showLayout = true;
  headingStyle = { color: 'blue' };

  constructor() {
    console.log('constructor');
    // this.ingredients = [];
    this.ingredients = ['patty', 'lettuce', 'cheeze', 'mayo', 'veggies'];
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  changeTitle(value: string) {
    this.appTitle = value;
    this.showLayout = !this.showLayout;
  }

  generateRandomNumber(): number {
    return Math.random();
  }
}
