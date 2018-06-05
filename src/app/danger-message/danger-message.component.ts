import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '.danger-message',
  templateUrl: './danger-message.component.html',
  styles: [`
    p{
      color: orange;
    }
  `]
})
export class DangerMessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
