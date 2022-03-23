import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CardModel } from "./mock_cards.model";
import { AngularFireDatabase} from "@angular/fire/compat/database";


@Injectable(
    {providedIn: 'root'}
)
export class CardsService{
    private baseUrl:string = "https://airbnb-94930-default-rtdb.firebaseio.com/";
    private cardsEndPoint:string = "cards.json";

    constructor(private db: AngularFireDatabase){

    }

    getCards(){
        return this.db.list<CardModel>("cards").valueChanges();

    }

    getCard(index:number){
        return this.db.list<CardModel>(this.baseUrl + 'cards' + '/' + index + '.json');
    }

    addCards(cards: CardModel){
        this.db.list<CardModel>("cards").push(cards);
    }
}