import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppEvent } from '../models/app-event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  // eventsUrl = 'assets/fake.json';
  eventsUrl = 'http://beast.traveltimeapp.com:9000/v1/ttp';
  cachedEvents: AppEvent[];
  // 47.3769° N, 8.5417° E
  // http://beast.traveltimeapp.com:9000/v1/ttp/47.3769/8.5417/walk?60

  constructor(private http: HttpClient) {}

  public getEvents(lat?: number, long?: number, mode?: string, travelTime?: number): Observable<AppEvent[]> {
    var lat = 47.3769;
    var long = 8.5417;
    var mode = 'walk';
    var travelTime = 30;

    if (this.cachedEvents) {
      return of(this.cachedEvents);
    } else {
      return this.http.get<AppEvent[]>(this.eventsUrl + '/' + lat + '/' + long + '/' + mode + '?' + travelTime ).pipe(
        map(data => {
          this.cachedEvents = data;
          return this.cachedEvents;
        }))
    }
  }

  public getEvent(id: number): Observable<AppEvent> {
    if (this.cachedEvents) {
      return of(this.cachedEvents.find(event => event.id === id));
    } else {
      return this.getEvents().pipe(
        map(events => {
          return events.find(event => event.id === id)}))
    }
  }
}
