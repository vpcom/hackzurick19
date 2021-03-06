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
  //baseUrl = 'http://beast.traveltimeapp.com:9000/v1/ttp';
  baseUrl = 'http://beast.traveltimeapp.com:9000/v1/events';
  
  staticData = false;
  cachedEvents: AppEvent[];
  // 47.3769° N, 8.5417° E
  // http://beast.traveltimeapp.com:9000/v1/ttp/47.3769/8.5417/walk?60

  constructor(private http: HttpClient) {}

  public getEvents(lat?: number, long?: number, travelTime?: number, eventType?: string): Observable<AppEvent[]> {
    // var lat = 47.3769;
    // var long = 8.5417;

    if (this.cachedEvents) {
      return of(this.cachedEvents);
    } else {
      if (!this.staticData) {
        this.eventsUrl = this.baseUrl + '/' + lat + '/' + long + '?travelTime=' + travelTime;
        if (eventType) this.eventsUrl += "&category=" + eventType;
      }
      
      return this.http.get<AppEvent[]>(this.eventsUrl).pipe(
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
      return this.http.get<AppEvent>('http://beast.traveltimeapp.com:9000/v1/event/' + id);
    }
  }

  public clearEvents(){
    this.cachedEvents = undefined;
  }

  public geocoding(city): Observable<string> {
    return this.http.get<string>('https://maps.googleapis.com/maps/api/geocode/json?address=' + city + '&key=AIzaSyDyY_eyWfTxYmYGvAjDUNbtUVyhcijEsro');
  }
}
