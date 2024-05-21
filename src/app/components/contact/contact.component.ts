import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,  private router :Router) {
    this.contactForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      asunto: ['', [Validators.required]],
      mensaje: ['', [Validators.required]]
    })
  }

  hasErrors(field: string, typeError: string) {
    return this.contactForm.get(field)?.hasError(typeError) && this.contactForm.get(field)?.touched;
  }

  submitForm(event: Event) {
    event.preventDefault();
  
    if (this.contactForm.valid) {
      const formData = new FormData();
      formData.append('nombre', this.contactForm.value.nombre);
      formData.append('email', this.contactForm.value.email);
      formData.append('asunto', this.contactForm.value.asunto);
      formData.append('mensaje', this.contactForm.value.mensaje);
      
      fetch("https://formspree.io/f/meqyvyje", {
        method: 'POST',
        body: formData
      })
      Swal.fire({
        title: 'Se envió con éxito!',
        text: 'El formulario se ha enviado exitosamente',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#551f9c'
      })
      this.router.navigate(['/home']);
    }
    else {
      Swal.fire({
        title: 'Advertencia!',
        text: 'El formulario no es válido',
        icon: 'warning',
        confirmButtonText: 'OK',
        confirmButtonColor: '#551f9c'
      })
    }
  }
  
}
