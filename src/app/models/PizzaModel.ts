export class PizzaModel {
    name: string;
    price: string;
    ingredients: string;
    imgSource: string;

    constructor(name: string, price: string, ingredients: string, imgSource: string) {
        this.name = name;
        this.price = price;
        this.ingredients = ingredients;
        this.imgSource = imgSource;
    }
}