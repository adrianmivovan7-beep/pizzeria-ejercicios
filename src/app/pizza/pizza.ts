import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { PizzaModel } from '../models/PizzaModel';
import { ListaPizzas } from '../lista-pizzas/lista-pizzas';

@Component({
  selector: 'app-pizza',
  standalone: true,
  imports: [ListaPizzas],
  templateUrl: './pizza.html',
  styleUrl: './pizza.scss'
})
export class Pizza implements OnInit, OnChanges {
  @Input() filtro: string = '';

  pizzasCompletas: PizzaModel[] = [];
  pizzasFiltradas: PizzaModel[] = [];

  ngOnInit(): void {
    const pizza1 = new PizzaModel(
      'Pizza margarita',
      '10€',
      'Ingredientes: tomate, mozzarella, albahaca',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTk16peSGndtpOEKHQBKJYb0uWPnMizlk0b0fOB6_mcQ&s=10'
    );

    const pizza2 = new PizzaModel(
      'Pizza barbacoa',
      '12€',
      'Ingredientes: tomate, mozzarella, carne, cebolla, salsa barbacoa',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVZoncjyLbaKDryZE0jfw5nwoEvcI7XddSdB5xS7klhg&s=10'
    );

    const pizza3 = new PizzaModel(
      'Pizza pepperoni',
      '12€',
      'Ingredientes: tomate, mozzarella, pepperoni',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQouGTXtN8UysN6FMjU02YV--MbkCuO1gjYUbxJ9B0Qqw&s=10'
    );

    const pizza4 = new PizzaModel(
      'Pizza carnivora',
      '13,50€',
      'Ingredientes: tomate, mozzarella, carne picada, pepperoni, salchichas',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVZoncjyLbaKDryZE0jfw5nwoEvcI7XddSdB5xS7klhg&s=10'
    );

    this.pizzasCompletas = [pizza1, pizza2, pizza3, pizza4];
    this.filtrarLista();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filtro'] && this.pizzasCompletas.length > 0) {
      this.filtrarLista();
    }
  }

  private filtrarLista(): void {
    const ingrediente = this.filtro.trim().toLowerCase();

    if (ingrediente === '') {
      this.pizzasFiltradas = this.pizzasCompletas;
      return;
    }

    this.pizzasFiltradas = this.pizzasCompletas.filter(pizza =>
      pizza.ingredients.toLowerCase().includes(ingrediente, 13)
    );
  }
}