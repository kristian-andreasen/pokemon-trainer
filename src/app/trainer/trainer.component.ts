import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/models/pokemon.model';
import { TrainerService } from '../services/trainer.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {
  pokemons: Pokemon[] = [];
  constructor(public trainerService: TrainerService) {}

  ngOnInit(): void {
    this.trainerService.getTrainerPokemons()
      .then((data) => {
        this.pokemons = data;
      })
  }
}
