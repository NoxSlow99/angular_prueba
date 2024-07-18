import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocumentResult } from '../../documents';
import { PokemonResults } from '../../interfaces/pokemon';

@Injectable({
  providedIn: 'root',
})
export class DocumentsService {
  constructor(private http: HttpClient) {}

  getDocumet(): Observable<DocumentResult> {
    return this.http.get<DocumentResult>('http://localhost:8080/document/getDocuments');
  }

  getPokemon(): Observable<PokemonResults> {
    return this.http.get<PokemonResults>(
      'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
    );
  }
}
