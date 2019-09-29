import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { event_type } from '../models/app-event.model';

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

  constructor() { }

  ngOnInit() {
  }

  changeType(id) {
    this.selectedTypeId = id;
  }

  search() {
    this.parametersReady.emit({
      eventTypeId: this.selectedTypeId,
      travelTime: this.travelTime,
      budget: this.budget,
      location: this.location,
      latitude: this.latitude,
      longitude: this.longitude,
    });
  }
}
