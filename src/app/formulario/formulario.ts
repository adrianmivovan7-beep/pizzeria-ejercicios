

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.scss'
})

export class Formulario implements OnInit {
  pedidoForm!: FormGroup;
  mensaje: string = '';

  pizzas = [
    { nombre: 'Pizza margarita', valor: 'margarita', precio: 10 },
    { nombre: 'Pizza pepperoni', valor: 'pepperoni', precio: 12 },
    { nombre: 'Pizza barbacoa', valor: 'barbacoa', precio: 12 },
    { nombre: 'Pizza carnivora', valor: 'carnivora', precio: 13.5 }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.pedidoForm = this.fb.group({
      hora: ['', Validators.required],
      direccion: ['', Validators.required],
      pizza: ['', Validators.required],
      pago: ['', Validators.required],
      telefono: [''],
      cuenta: ['']
    });
  }

  actualizarValidacionesPago(): void {
    const pago = this.pedidoForm.get('pago')?.value;
    const telefono = this.pedidoForm.get('telefono')!;
    const cuenta = this.pedidoForm.get('cuenta')!;

    telefono.clearValidators();
    cuenta.clearValidators();

    if (pago === 'bizum') {
      telefono.setValidators([
        Validators.required,
        Validators.pattern(/^(\+34)?[6789]\d{8}$/)
      ]);
      cuenta.setValue('');
    } else if (pago === 'tarjeta') {
      cuenta.setValidators([
        Validators.required,
        Validators.pattern(/^\d{16}$/i)
      ]);
      telefono.setValue('');
    } else {
      telefono.setValue('');
      cuenta.setValue('');
    }

    telefono.updateValueAndValidity();
    cuenta.updateValueAndValidity();
    this.mensaje = '';
  }

  realizarPedido(): void {
    if (this.pedidoForm.invalid) {
      this.pedidoForm.markAllAsTouched();
      this.mensaje = 'Revisa los campos marcados antes de continuar.';
      return;
    }

    this.pedidoForm.reset();
  }
}