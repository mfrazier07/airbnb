import { Component } from "@angular/core";
import { card_list } from "./card_list";
import { CardModel } from "./mock_cards.model";

@Component({
    selector:'online-experiences',
    templateUrl: 'online_experiences_layout.component.html',
    styleUrls: ['online_experiences_layout.component.css']
})

export class OnlineExpComponent{
    cardTrips: CardModel [] = [];

    constructor(){
        for(var cardTrip of card_list){
            console.log(cardTrip);
            this.cardTrips.push(cardTrip);
        }
    }
}