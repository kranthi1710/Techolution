import { Component } from '@angular/core';
import { PokemonsService } from '../services/pokemons.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.scss',
  providers:[PokemonsService]
})
export class PokemonsComponent {
  pockemonList:any[] = [];
  constructor(private pokemonsService:PokemonsService,private route : Router )
  {
    this.pokemonsService.getPokemons().subscribe((data:any)=>{
      this.pockemonList = data.results;
    })
  }
  getDetails(id:any){
    this.route.navigateByUrl(`pokemon-list/${id}`)
  }
}
