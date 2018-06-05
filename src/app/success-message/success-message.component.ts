import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[success-message]',
  templateUrl: './success-message.component.html',
  styles: [`
    p{
      color: green;
    }
  `]


})
export class SuccessMessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
