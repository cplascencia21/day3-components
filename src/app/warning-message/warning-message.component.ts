import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'warning-message',
  template: `
    <h1>warning-message</h1>
    `,
  styles: [`
    h1{
      color: blue;
    }
  `]
})
export class WarningMessageComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
}
