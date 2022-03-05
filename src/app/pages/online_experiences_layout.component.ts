import { Component, OnInit } from "@angular/core";
import { CardsService } from "./cards.service";
import { CardModel } from "./mock_cards.model";

@Component({
    selector: 'online-experiences',
    templateUrl: 'online_experiences_layout.component.html',
    styleUrls: ['online_experiences_layout.component.css']
})

export class OnlineExpComponent implements OnInit {
    cardTrips: CardModel[] = [];
    constructor(private cardsService:CardsService) {
    }
    ngOnInit(): void {
        this.cardsService.getCards().subscribe((data: CardModel []) =>{
            console.log("Fetching cards");
            for (var card of data){
                this.cardTrips.push(card);
            }
        });
    }
}