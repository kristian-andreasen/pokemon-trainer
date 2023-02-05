import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from 'src/models/pokemon.model';
import { User } from 'src/models/user.model';
import { StorageUtil } from 'src/utils/storage.utils';
import { StorageKeys } from '../enums/storage-keys.enum';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  API_TRAINERS = 'https://noroff-api-production-c63f.up.railway.app/trainers';
  API_KEY = 'SECRET';
  //User or undefined
  private _user?: User;

  get user(): User | undefined {
    return this._user;
  }

  set user(user: User | undefined) {
    StorageUtil.storageSave<User>(StorageKeys.User, user!);
    this._user = user;
  }

  constructor(private http: HttpClient) {
    this._user = StorageUtil.storageRead<User>(StorageKeys.User);
  }

  removePokemon(pokemon: Pokemon) {
    // Check if the user exists and their pokemon list includes the specified pokemon
    if (this.user && this.user.pokemon.includes(pokemon.name)) {
      // Find the index of the pokemon in the user's pokemon list
      const index = this.user.pokemon.indexOf(pokemon.name);
      // Remove the pokemon from the list
      this.user.pokemon.splice(index, 1);
      // Update the user on the API
      const headers = new HttpHeaders({
        'content-type': 'application/json',
        'x-api-key': this.API_KEY,
      });
      this.http.patch(`${this.API_TRAINERS}/${this.user.id}`,
      { pokemon: this.user.pokemon },
      { headers }).subscribe((res) => {
        console.log(res);
      });
      // Update the user in the session storage
      StorageUtil.storageSave('pokemon-user', this.user);
    }
  }
}
