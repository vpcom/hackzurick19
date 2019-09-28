import { Time } from '@angular/common';

export interface AppEvent {
  event_id: number;
  date : Date;
  start_time : Time;
  end_time : Time;
  title :  string;
  short_description : string;
  long_description : string;
  homepage : string;
  price_information : string;
  thumbnail_url : string;
  address_street : string;
  address_address_line : string;
  address_zip : string;
  address_city : string;
  address_country : string;
  address_venue_name : string;
  address_latitude : number;
  address_longitude : number;
}
