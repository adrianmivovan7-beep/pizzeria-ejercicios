import { Component, input, output } from '@angular/core';
import { PizzaPedido } from '../models/PizzaModel';

@Component({
  selector: 'app-lista-pizzas',
  standalone: true,
  imports: [],
  templateUrl: './lista-pizzas.html',
  styleUrl: './lista-pizzas.scss'
})
export class ListaPizzas {
  name = input('');
  price = input('');
  ingredients = input('');
  imgSource = input('');

  anadir = output<PizzaPedido>();

  cantidad: number = 1;

  cambiarCantidad(event: Event): void {
    const valor = Number((event.target as HTMLInputElement).value);

    if (Number.isInteger(valor) && valor > 0) {
      this.cantidad = valor;
    }
  }

  anadirAlPedido(): void {
    this.anadir.emit({
      name: this.name(),
      price: this.price(),
      ingredients: this.ingredients(),
      cantidad: this.cantidad
    });
  }
}