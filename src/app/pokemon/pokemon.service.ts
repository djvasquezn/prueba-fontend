import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseUrl: string = 'https://pokemon-pichincha.herokuapp.com/pokemons';

  constructor(private http: HttpClient) { }

  getAllPokemons() {
    return this.http.get<Pokemon[]>(this.baseUrl);
  }

  getPokemonById(id) {
    return this.http.get<Pokemon>(`${this.baseUrl}/${id}`);
  }
}
