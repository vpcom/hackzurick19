import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppEvent } from '../models/app-event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventsUrl = 'assets/fake.json';
  cachedEvents: AppEvent[];

  constructor(private http: HttpClient) {}

  public getEvents(): Observable<AppEvent[]> {
    if (this.cachedEvents) {
      return of(this.cachedEvents);
    } else {
      return this.http.get<AppEvent[]>(this.eventsUrl).pipe(
        map(data => {
          this.cachedEvents = data;
          return this.cachedEvents;
        }))
    }
  }

  public getEvent(id: number): Observable<AppEvent> {
    if (this.cachedEvents) {
      return of(this.cachedEvents.find(event => event.event_id === id));
    } else {
      return this.getEvents().pipe(
        map(events => {
          return events.find(event => event.event_id === id)}))
    }
  }
}
