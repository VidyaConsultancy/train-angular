import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  interval!: any;
  today = new Date();

  constructor() {}

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.today = new Date();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    console.log('LayoutComponent ngOnDestroy');
  }
}
