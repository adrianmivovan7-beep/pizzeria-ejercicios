
import { Component, EventEmitter, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar{
  @Output() filtroIngredientes = new EventEmitter<string>();

  ingrediente: string = '';

  filtrarPizzas(): void {
    this.filtroIngredientes.emit(this.ingrediente.trim());
  }

  limpiarFiltro(): void {
    this.ingrediente = '';
    this.filtrarPizzas();
  }
}
