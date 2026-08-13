import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-verificacion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './verificacion.html',
  styleUrl: './verificacion.css'
})
export class VerificacionComponent {
  twoFactorForm: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.twoFactorForm = this.fb.group({
      code: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]]
    });
  }

  onSubmit(): void {
    if (this.twoFactorForm.invalid) {
      this.twoFactorForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    console.log('Código 2FA ingresado:', this.twoFactorForm.value.code);

    // Simulación de verificación con el backend
    setTimeout(() => {
      this.isSubmitting = false;
      alert('¡Autenticación en dos pasos exitosa!');
      this.router.navigate(['/login']);
    }, 1500);
  }

  resendCode(): void {
    alert('Se ha enviado un nuevo código a tu dispositivo.');
  }
}