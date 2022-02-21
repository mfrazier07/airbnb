
import { Component, Input } from "@angular/core";

@Component({
    selector: 'vertical-card',
    templateUrl: 'vertical_card.component.html',
    styleUrls: ['vertical_card.component.css']
})

export class VerticalCardComponent {
    @Input() img: string;
    @Input() rating: number;
    @Input() location: string;
    @Input() description: string;
    @Input() price: number;

    constructor() {
        this.img = "";
        this.rating = 0;
        this.location = "";
        this.description = "";
        this.price = 0;

    }
}
