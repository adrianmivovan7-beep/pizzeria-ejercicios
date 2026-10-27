import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-lista-pizzas',
  styleUrl: './lista-pizzas.scss',
  templateUrl: './lista-pizzas.html',
})
export class ListaPizzas {
  name = input("name");
  price = input("price");
  ingredients = input("ingredients");
  imgSource = input("imgSource.jpg");
}
