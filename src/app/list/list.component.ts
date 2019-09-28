import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Observable } from 'rxjs';
import { AppEvent } from '../models/app-event.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  events$: Observable<AppEvent[]>;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.events$ = this.eventService.getEvents();
  }
}
