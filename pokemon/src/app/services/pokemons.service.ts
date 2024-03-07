import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http:HttpClient) { }
  
  getPokemons() 
  {
    return this.http.get('https://pokeapi.co/api/v2/pokemon');
  }

  getPokemonDetails(id:number) 
  {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
  getPokemonElovations(id:number) 
  {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  }
}
