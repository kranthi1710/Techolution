import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent : () =>import('../app/pokemons/pokemons.component').then(e=>e.PokemonsComponent)
    },
    {
        path:'pokemon-list/:id',
        loadComponent : () =>import('../app/pokemon-detail/pokemon-detail.component').then(e=>e.PokemonDetailComponent)
    }

];
