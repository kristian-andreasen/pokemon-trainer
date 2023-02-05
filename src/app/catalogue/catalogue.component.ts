import { Component } from '@angular/core';
import { PokemonCatalogueService } from '../services/pokemon-catalogue.service';
import { Pokemon } from 'src/models/pokemon.model';
import { StorageUtil } from 'src/utils/storage.utils';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent {
  API_TRAINERS = 'https://noroff-api-production-c63f.up.railway.app/trainers';
  API_KEY = 'SECRET';

  // Define a property named "pokemons" with type "Pokemon[]"
  pokemons: Pokemon[] = [];
  public userName: string = '';

  constructor(
    private pokemonCatalogueService: PokemonCatalogueService,
    public userService: UserService,
    private http: HttpClient
  ) {}

  // Method to get the URL of the Pokemon's image
  getPokemonImageUrl(url: string): string {
    // Extract the Pokemon's ID from the URL
    const id = this.pokemonCatalogueService.extractID(url);
    // Return the URL of the Pokemon's image
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  ngOnInit() {
    // Fetch the pokemons from the API and store them in the "pokemons" property
    this.pokemonCatalogueService.fetchPokemons().subscribe((pokemons) => {
      this.pokemons = pokemons;
      StorageUtil.storageSave('pokemons', pokemons);
    });
  }

  // Method to add a pokemon to the user's pokemon list
  addPokemon(pokemon: Pokemon) {
    // Check if the user is logged in and if they don't already have the pokemon in their list
    if (this.userService.user && !this.userService.user.pokemon.includes(pokemon.name)) {
      // Add the pokemon to the user's pokemon list
      this.userService.user.pokemon.push(pokemon.name);

      // Set the headers for the API request
      const headers = new HttpHeaders({
        'content-type': 'application/json',
        'x-api-key': this.API_KEY
      });
      // Make the HTTP PATCH request to update the user's pokemon list on the API
      this.http.patch(`${this.API_TRAINERS}/${this.userService.user.id}`,
      { pokemon: this.userService.user.pokemon },
      { headers }).subscribe((res) => {
        // Log the response from the API
        console.log(res);
      });
    }
  }
}
