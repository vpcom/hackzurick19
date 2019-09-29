import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { event_type, AppEvent } from '../models/app-event.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public event_type = event_type;
  public travelTime = 10;
  public budget = 20;
  public location = "Zurich";
  public latitude: number;
  public longitude: number;
  public geolocationReady$ = new BehaviorSubject(true);
  geolocationReady = true;
  eventList$ = new BehaviorSubject([]); //: Observable<AppEvent[]>;
  eventList: AppEvent[];
  fullEventList: AppEvent[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.getLocation();
  }


  getLocation(): void{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          
        this.eventService.getEvents(this.latitude, this.longitude, this.travelTime).subscribe(x => {
          this.eventList$.next(x);
          this.eventList = x;
          this.fullEventList = x;
          
          this.geolocationReady$.next(true);
        });
      });
    } else {
       console.log("No support for geolocation")
    }
  }

  onSubmited(event) {
    let eventType;
    debugger;
    if (event.location !== this.location ||
      event.travelTime !== this.travelTime) {
        this.location = event.location;
        this.travelTime = event.travelTime;
      
      this.eventService.clearEvents();
      
      this.eventService.getEvents(event.latitude, event.longitude, this.travelTime).subscribe(x => {
        this.eventList$.next(x);
        this.fullEventList = x;
        this.eventList = x;
        this.eventList = this.fullEventList.filter(x => x.category === eventType)
        
        this.geolocationReady$.next(true);
      });
    }
    else {
      if (event.eventTypeId !== "ANY" && typeof event.eventTypeId !== undefined) {
        eventType = event_type[event.eventTypeId];
        this.eventList = this.fullEventList.filter(x => x.category === eventType);
      }
      else {
        eventType = event_type.ANY;
        this.eventList = this.fullEventList;
      }
    }

    this.eventList$.next(this.eventList);
  }

}
