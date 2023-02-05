import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/models/pokemon.model';
import { PokemonCatalogueService } from '../services/pokemon-catalogue.service';
import { TrainerService } from '../services/trainer.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {
  pokemons: Pokemon[] = [];
  constructor(
    public trainerService: TrainerService,
    private pokemonCatalogueService: PokemonCatalogueService) {}

    // Method to get the URL of the Pokemon's image
    getPokemonImageUrl(url: string): string {
      // Extract the Pokemon's ID from the URL
      const id = this.pokemonCatalogueService.extractID(url);
      // Return the URL of the Pokemon's image
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    }

  ngOnInit(): void {
    this.trainerService.getTrainerPokemons()
      .then((data) => {
        this.pokemons = data;
      })
  }
}
