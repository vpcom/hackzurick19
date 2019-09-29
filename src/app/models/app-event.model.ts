import { Time } from '@angular/common';

export interface AppEvent {
  id: number;
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
  travel: travel
}

export interface travel {
    type: string;
    time: number;
    carbon_footprint: number;
}

export enum travel_type {
  ANY = "Any",
  WALK = "Walk",
  CAR = "Car",
}

export enum event_type {
  ANY = "Any",
  CUSTOMS = "Customs, Folklore & Celebrations",
  STAGE = "stage",
  EXHIBITION = "Exhibitions",
  ART_DESIGN = "Art & design",
  CONCERT = "Concert",
  CONGRESS_CONFERENCES = "Congresses & conferences",
  // CONCERT_FOLK = "Concert folk music",
  SOCIETY = "Society",
  FAIR_MARKET = "Fair & market",
  COMMUNITY_CALENDAR = "Community calendar",
  COOKING = "Culinary art",
  // = "Concerts others",
  MUSEUM_ATTRACTION = "Museums & Attractions",
  RELIGION = "Religion & Spirituality",
  PARTY = "Party",
  SIGHTSEEING = "Sightseeing & city tour",
  MISC = "This and that",
  SPORT = "Sports",
  // = "Classical concert",
  ECONOMY = "Economy"
}
