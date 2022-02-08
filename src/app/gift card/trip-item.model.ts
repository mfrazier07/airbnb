export class TripItemModel{
    img: string;
    place: string;
    miles: number;
    bg_color: string;

    constructor(img: string, place: string, miles: number, bg_color:string){
        this.img = img;
        this.place = place;
        this.miles = miles;
        this.bg_color = bg_color;
    }
}