import { Component, OnInit } from '@angular/core';
import { CardsService } from '../pages/cards.service';
import { CardModel } from '../pages/mock_cards.model';

@Component({
  selector: 'airbnb-add-cards',
  templateUrl: './add-cards.component.html',
  styleUrls: ['./add-cards.component.css']
})
export class AddCardsComponent implements OnInit {

  constructor(private cs: CardsService) { }

  ngOnInit(): void {
  }

  addCards(cards:CardModel){
    this.cs.addCards(cards);
  }

}
