import { Component, Input } from "@angular/core";

@Component ({
    selector: 'next-trip-card',
    templateUrl: 'next_trip_card.component.html',
    styleUrls: ['next_trip_card.component.css']
})
export class NextTripCardComponent{
    @Input() img: string;
    @Input() place: string;
    @Input() miles: number;
    @Input() bg_color: string;

    constructor(){
        this.img = "";
        this.place = "";
        this.miles = 0;
        this.bg_color = "blue"
    }


}