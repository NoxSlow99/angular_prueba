import { Component } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent{

  constructor(private fb: FormBuilder) {}

  get ure () {
    return this.formDocument.get('ure') as FormControl;
  }

  get denomina () {
    return this.formDocument.get('denomina') as FormControl;
  }

  formDocument = this.fb.group({
    'ure': [''],
    'denomina': ['']
  })

/*   formDocument = new FormGroup({
    'ure': new FormControl(''),
    'denomina': new FormControl('')
  })
 */
  // ure = new FormControl('');
  // denomina = new FormControl('');

/*   formDocuments = this.fb.group({
    ure: [0],
    denomina: [''],
    anio: [0],
    secuencia: [0],
    clasifica: [0],
    fecha: [new Date()],
    tipo: [0],
    valor: [0],
    tramite: [0],
    concentrado: [0],
    ubica: [''],
    archivo: [''],
    status: [0],
    descripcion: [''],
    hojas: [0],
    observaValores: ['']
  }); */

  procesar() {
    console.log(this.formDocument.value);
  }
}
