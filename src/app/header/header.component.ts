import { Component, OnInit } from '@angular/core';

import { AlertsService } from '../alerts.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private alerts: AlertsService) { }

  ngOnInit() {
  }

  refresh() {
    this.alerts.refresh();
  }

}
