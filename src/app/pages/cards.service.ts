import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CardModel } from "./mock_cards.model";


@Injectable(
    {providedIn: 'root'}
)
export class CardsService{
    private baseUrl:string = "https://airbnb-94930-default-rtdb.firebaseio.com/";
    private cardsEndPoint:string = "cards.json";

    constructor(private http:HttpClient){

    }

    getCards(){
        return this.http.get<CardModel []>(this.baseUrl + this.cardsEndPoint);

    }

    getCard(index:number){
        return this.http.get<CardModel>(this.baseUrl + 'cards' + '/' + index + '.json');
    }
}