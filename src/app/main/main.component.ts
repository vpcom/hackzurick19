import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { travel_type } from '../models/app-event.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public travel_type = travel_type;
  public travelTime = 30;
  public budget = 50;
  public location = "Zurich";
  public longitude: number;
  public latitude: number;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.getLocation();
  }


  getLocation(): void{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log(position);
          this.longitude = position.coords.longitude;
          this.latitude = position.coords.latitude;
          this.eventService.getEvents(this.latitude, this.longitude, travel_type.ANY, 30);
        });
    } else {
       console.log("No support for geolocation")
    }
  }

  onSubmited(event) {
    console.log(event)
    this.eventService.getEvents(event.latitude, event.longitude, event.travel_type.ANY, event.travelTime);
  }

}
