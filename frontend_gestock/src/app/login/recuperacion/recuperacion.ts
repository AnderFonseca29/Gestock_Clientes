import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recuperacion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './recuperacion.html',
  styleUrl: './recuperacion.css'
})
export class RecuperacionComponent {
  recoveryForm: FormGroup;
  isSubmitting = false;
  messageSent = false;

  constructor(private fb: FormBuilder) {
    this.recoveryForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.recoveryForm.invalid) {
      this.recoveryForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    console.log('Solicitud de recuperación para:', this.recoveryForm.value.email);

    // Simulación de envío hacia el backend
    setTimeout(() => {
      this.isSubmitting = false;
      this.messageSent = true;
    }, 1500);
  }
}