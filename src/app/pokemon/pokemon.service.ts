import { Injectable } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  //constructor() { }
  getPokemonList(): Pokemon[] {
    return POKEMONS;
  }

  getPokemonById(pokemonId: number): Pokemon | undefined {
    return POKEMONS.find((item) => item.id == pokemonId);
  }

  getPokemonTypeList(): string[] {
    return [
      'Plante',
      'Poison',
      'Feu',
      'Eau',
      'Insecte',
      'Vol',
      'Normal',
      'Fée',
      'Electick',
    ];
  }
}
