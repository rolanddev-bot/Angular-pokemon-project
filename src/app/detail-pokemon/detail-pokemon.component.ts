import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';
import { PokemonTypeColorPipe } from '../list-pokemon/pokemon-type-color.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [PokemonTypeColorPipe, CommonModule],
  templateUrl: './detail-pokemon.component.html',
  styleUrl: './detail-pokemon.component.css',
})
export class DetailPokemonComponent implements OnInit {
  pokemonList: Pokemon[] = [];
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.goToPokemonList;
    this.pokemonList = POKEMONS;
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    //snapshot recupere les infos d'une url a l'instant T
    if (pokemonId) {
      this.pokemon = this.pokemonList.find((item) => item.id == +pokemonId);
    }
  }

  goToPokemonList() {
    // window.history.back(); //retour en arriere
    this.router.navigate(['/pokemons']);
  }
}
