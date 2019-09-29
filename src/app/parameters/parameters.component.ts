import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { event_type } from '../models/app-event.model';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.scss']
})
export class ParametersComponent implements OnInit {

  @Input() eventTypeId: string;
  @Input() travelTime: number;
  @Input() budget: number;
  @Input() location: string;
  @Input() latitude: string;
  @Input() longitude: string;

  @Output() parametersReady = new EventEmitter<any>();
  
  public event_type = event_type;
  selectedTypeId;

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  changeType(id) {
    this.selectedTypeId = id;
  }

  search() {
    this.eventService.geocoding(this.location).subscribe(coord => {
      console.log(coord);
      
      this.latitude = coord['results'][0].geometry.location.lat;
      this.longitude = coord['results'][0].geometry.location.lng;
      console.log(this.latitude, this.longitude);
      
      this.parametersReady.emit({
        eventTypeId: this.selectedTypeId,
        travelTime: this.travelTime,
        budget: this.budget,
        location: this.location,
        latitude: this.latitude,
        longitude: this.longitude,
      });
    })
  }
}
