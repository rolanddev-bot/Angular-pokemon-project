import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './list-pokemon/border-card.directive';
import { PokemonTypeColorPipe } from './list-pokemon/pokemon-type-color.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
