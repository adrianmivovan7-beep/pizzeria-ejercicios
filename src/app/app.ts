
import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Pizza } from './pizza/pizza';
import { Formulario } from './formulario/formulario';

@Component({
  selector: 'app-root',
  imports: [Navbar, Pizza, Formulario],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  ingredienteSeleccionado = '';

  filtrarPorIngrediente(ingrediente: string) {
    this.ingredienteSeleccionado = ingrediente;
  }
}