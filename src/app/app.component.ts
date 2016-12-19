import { Component, OnInit } from '@angular/core';

import { AlertsService } from './alerts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  alertsData: Object[];

  constructor(private alerts: AlertsService) {}

  ngOnInit() {
    this.alerts.alerts$.subscribe(data => {
      this.alertsData = data;
    });
    this.alerts.refresh();
  }
}
