export class CardModel{
    img: string;
    rating: number;
    location: string;
    description: string;
    price: number;

    constructor(img:string, rating:number, location:string, description:string, price:number){
        this.img = img,
        this.rating = rating,
        this.location = location,
        this.description = description
        this.price = price
    }
}
