import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'warning-message',
  template: `
    <h1>warning message</h1>
    `,
  styleUrls: ['./warning-message.component.css'],
})
export class WarningMessageComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
}
