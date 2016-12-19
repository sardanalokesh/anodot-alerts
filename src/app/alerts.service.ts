import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AlertsService {

  private readonly URL: string = "/alerts";
  private alertsSource = new BehaviorSubject<Object[]>([]);

  alerts$ = this.alertsSource.asObservable();

  constructor(private http: Http) { }

  refresh() {
    this.http.get(this.URL)
      .subscribe(response => {
        let res = <Response> response;
        if (res.status == 200){
          let alerts = res.json();
          alerts.sort((a1: Object,a2: Object) => {
            return a2["startTimeEpoch"] - a1["startTimeEpoch"];
          });
          console.log(alerts);
          this.alertsSource.next(alerts);
        }
      })
  }

}
