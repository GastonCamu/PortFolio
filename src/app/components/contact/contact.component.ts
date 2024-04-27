import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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
      alert("Formulario enviado exitosamente")
    }
    else {
      alert('El formulario no es válido');
    }
  }
  
}
