import { Component } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { PokemonsService } from '../services/pokemons.service';
import { TabViewModule } from 'primeng/tabview';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChipModule } from 'primeng/chip';
@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [TabViewModule, HttpClientModule, ChipModule],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent {
  pokemonId: any;
  tabShift: any = 'home';
  evolutionChainData: any[] = [];
  details: any;
  constructor(private route: Router, private pokemon: PokemonsService, private http: HttpClient) {
    this.route.events.subscribe((route: any) => {
      if (route?.snapshot?.params?.id && route.snapshot.params.id != undefined) {
        this.pokemonId = route.snapshot.params.id;
      }
      this.pokemon.getPokemonDetails(this.pokemonId).subscribe((detail: any) => {
        this.details = detail;
      })
      this.pokemon.getPokemonElovations(this.pokemonId).subscribe((data: any) => {
        this.http.get(data.evolution_chain.url).subscribe((evolution: any) => {
          console.log(evolution)
          this.evolutionChainData = evolution.chain.evolves_to;
        })
      })
    })
  }
}
