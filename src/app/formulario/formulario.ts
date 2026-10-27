
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.scss'
})
export class Formulario implements OnInit{
  pedidoForm!: FormGroup;

  pizzas = [
    { nombre: 'Pizza margarita', valor: 'margarita', precio: 10 },
    { nombre: 'Pizza pepperoni', valor: 'pepperoni', precio: 12 },
    { nombre: 'Pizza barbacoa', valor: 'barbacoa', precio: 12 },
    { nombre: 'Pizza carnivora', valor: 'carnivora', precio: 13.5 }
  ];

  mensaje: string = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.pedidoForm = this.fb.group({
      hora: ['', Validators.required],
      direccion: ['', Validators.required],
      pizza: ['', Validators.required],
      pago: ['', Validators.required]
    });

    console.log('Formulario iniciado');
  }

  realizarPedido(): void {
    if (this.pedidoForm.invalid) {
      this.pedidoForm.markAllAsTouched();
      this.mensaje = 'Completa todos los campos del formulario.';
      return;
    }

    console.log('Pedido realizado:', this.pedidoForm.value);
    this.mensaje = 'Pedido realizado correctamente.';
    this.pedidoForm.reset();
  }
}