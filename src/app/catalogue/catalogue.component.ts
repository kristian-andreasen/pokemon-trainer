//import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { PokemonCatalogueService } from '../services/pokemon-catalogue.service';
//import { map } from 'rxjs/operators';
import { Pokemon } from 'src/models/pokemon.model';
import { StorageUtil } from 'src/utils/storage.utils';
//import { ResponseData } from 'src/models/responseData.model';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent {
  // Define a property named "pokemons" with type "Pokemon[]"
  pokemons: Pokemon[] = [];

  constructor(private pokemonCatalogueService: PokemonCatalogueService) {}
  // New public method
  getPokemonImageUrl(url: string): string {
    // Extract the Pokemon's ID from the URL
    const id = this.pokemonCatalogueService.extractID(url);
    // Return the URL of the Pokemon's image
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  ngOnInit() {
    this.pokemonCatalogueService.fetchPokemons().subscribe((pokemons) => {
      this.pokemons = pokemons;
      //console.log(pokemons);
      StorageUtil.storageSave('pokemons', pokemons);
    });
  }
}
