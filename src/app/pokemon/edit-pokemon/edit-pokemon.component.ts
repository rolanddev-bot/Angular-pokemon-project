import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../../pokemon';
import { CommonModule } from '@angular/common';
import { PokemonFormComponent } from "../pokemon-form/pokemon-form.component";

@Component({
    selector: 'app-edit-pokemon',
    standalone: true,
    templateUrl: './edit-pokemon.component.html',
    styleUrl: './edit-pokemon.component.css',
    imports: [CommonModule, PokemonFormComponent]
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute, //permet de recuperer l'id ramener
    private pokemonservice: PokemonService
  ) {}

  ngOnInit() {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemon = this.pokemonservice.getPokemonById(+pokemonId);
    } else {
      this.pokemon = undefined;
    }
  }
}
