import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../services/event.service';
import { Observable } from 'rxjs';
import { AppEvent } from '../models/app-event.model';

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
  
  events$: Observable<AppEvent[]>;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.events$ = this.eventService.getEvents();
  }
}
