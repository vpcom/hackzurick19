import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppEvent } from '../models/app-event.model';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id: number;
  event: AppEvent;

  constructor(private activatedRoute: ActivatedRoute,
              private eventService: EventService) {
    this.id = +this.activatedRoute.snapshot.params.event_id;
    this.eventService.getEvent(this.id).subscribe(appEvent => {this.event = appEvent});
  }

  ngOnInit() { }

}
