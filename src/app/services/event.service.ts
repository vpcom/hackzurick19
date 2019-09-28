import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventsUrl = 'assets/fake.json';

  constructor(private http: HttpClient) {}

  public getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventsUrl);
  }
}
