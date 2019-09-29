import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../services/event.service';
import { Observable } from 'rxjs';
import { AppEvent, event_type } from '../models/app-event.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() eventTypeId: string;
  @Input() travelTime: number;
  @Input() budget: number;
  @Input() location: string;
  @Input() latitude: number;
  @Input() longitude: number;
  @Input() eventList$: Observable<AppEvent[]>;
  
  events$: Observable<AppEvent[]>;

  constructor() { }

  ngOnInit() {  }

}
