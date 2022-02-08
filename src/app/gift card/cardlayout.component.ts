import { Component, Input } from "@angular/core";
import { mock_trip_list } from "./mock_trip_item";
import { TripItemModel } from "./trip-item.model";


@Component ({
    selector: 'cardlayout',
    templateUrl: 'cardlayout.component.html',
    styleUrls: ['cardlayout.component.css']

})
export class LayoutComponent{
   trips: TripItemModel[] = [];

  constructor(){
    for (var trip of mock_trip_list){
      console.log(trip);
      this.trips.push(trip);
    }
  }
}