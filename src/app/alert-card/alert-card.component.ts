import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'alert-card',
  templateUrl: './alert-card.component.html',
  styleUrls: ['alert-card.component.scss']
})
export class AlertCardComponent implements OnInit {

  @Input() data: Object;

  constructor() { }

  ngOnInit() {
  }

}
