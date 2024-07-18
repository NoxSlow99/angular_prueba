import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { DocumentsService } from '../core/services/documents.service';
import { Observable } from 'rxjs';
import { DocumentResult } from '../documents';
import { AsyncPipe } from '@angular/common';
import { PokemonResults } from '../interfaces/pokemon';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent implements OnInit {
  public pokemonResults$!: Observable<DocumentResult>;
  public results$!: Observable<any>;

  constructor(private fb: FormBuilder, private service: DocumentsService) {}
  ngOnInit(): void {
    this.pokemonResults$ = this.service.getDocumet();
    this.results$ = this.service.getPokemon();
    // console.log((this.pokemonResults$ = this.service.getDocumet()));
  }

  get ure() {
    return this.formDocument.get('ure') as FormControl;
  }

  get denomina() {
    return this.formDocument.get('denomina') as FormControl;
  }

  formDocument = this.fb.group({
    ure: [''],
    denomina: [''],
  });

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
