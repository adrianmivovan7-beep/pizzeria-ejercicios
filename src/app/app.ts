import { Component, OnInit } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Pizza } from './pizza/pizza';
import { Formulario } from './formulario/formulario';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Pizza, Formulario],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App implements OnInit {
  filtroActual: string = '';

  ngOnInit(): void {
    console.log('Aplicacion iniciada');
  }

  actualizarFiltro(ingrediente: string): void {
    this.filtroActual = ingrediente;
  }
}