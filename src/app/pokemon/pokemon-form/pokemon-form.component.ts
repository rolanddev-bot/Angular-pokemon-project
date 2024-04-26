import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../../pokemon';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PokemonTypeColorPipe } from '../list-pokemon/pokemon-type-color.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-form',
  standalone: true,
  imports: [FormsModule, PokemonTypeColorPipe, CommonModule],
  templateUrl: './pokemon-form.component.html',
  styleUrl: './pokemon-form.component.css',
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon!: Pokemon;
  types: string[] | undefined;

  constructor(private pokemonservice: PokemonService, private router: Router) {}
  ngOnInit(): void {
    this.types = this.pokemonservice.getPokemonTypeList();
  }

  hasType(type: string): boolean {
    return this.pokemon?.types.includes(type);
  }

  selectType($event: Event, type: string) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }

  isTypesValid(type: string): boolean {
    if (this.pokemon.types.length == 1 && this.hasType(type)) {
      return false;
    }
    if (this.pokemon.types.length > 2 && !this.hasType(type)) {
      return false;
    }
    return true;
  }

  goToPokemonList() {
    this.router.navigate(['/pokemon', this.pokemon.id]);
  }

  onSubmit() {
    console.log('submit form ok');
    this.router.navigate(['/pokemon', this.pokemon.id]);
  }
}
