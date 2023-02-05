import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pokemon } from 'src/models/pokemon.model';
import { User } from 'src/models/user.model';
import { StorageUtil } from 'src/utils/storage.utils';
import { Observable, map, defer } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class TrainerService {
  API_TRAINERS = 'https://noroff-api-production-c63f.up.railway.app/trainers';
  API_KEY = 'SECRET';

  constructor(
    private readonly http: HttpClient,
    public userService: UserService
  ) {}

  async getTrainerPokemons() {
    const user = StorageUtil.storageRead<User>('pokemon-user');
    const pokemons = StorageUtil.storageRead<Pokemon[]>('pokemons');
    if (!pokemons) {
      return [];
    }
    const response = await fetch(environment.apiTrainers);
    const users: User[] = await response.json();
    const filteredUser = users.find((u) => u.username === user?.username);
    const trainerPokemons = filteredUser?.pokemon;
    if (!trainerPokemons) {
      return [];
    }
    const results: Pokemon[] = [];
    for (let p of trainerPokemons) {
      results.push({
        name: p,
        url: pokemons.find((pokemon) => pokemon.name === p)?.url as string,
      });
    }
    return results;
  }
}
