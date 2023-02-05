import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Pokemon } from 'src/models/pokemon.model';
import { ResponseData } from 'src/models/responseData.model';
import { Observable, of } from 'rxjs';
import { StorageUtil } from 'src/utils/storage.utils';

@Injectable({
  providedIn: 'root',
})
export class PokemonCatalogueService {
  BASE_URL = 'https://pokeapi.co/api/v2';

  // Define a constant named "MAX_SAFE_INTEGER" equal to the maximum safe integer in JavaScript
  // This ensures that we retrieve all the pokemons in a single API call
  MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;

  private _pokemons: Pokemon[] = [];

  public get pokemons(): Pokemon[] {
    return this._pokemons;
  }

  public extractID(url: string): number {
    const urlArray = url.split('/');
    return +urlArray[urlArray.length - 2];
  }

  constructor(private readonly http: HttpClient) {}

  public fetchPokemons(): Observable<Pokemon[]> {
    const storedData = StorageUtil.storageRead<Pokemon[]>('pokemons');

    if (storedData && storedData.length > 0) {
      console.log(`Returning stored pokemons data`, storedData);
      this._pokemons = storedData;
      return of(storedData);
    }

    return this.http.get<ResponseData>(`${this.BASE_URL}/pokemon?limit=${this.MAX_SAFE_INTEGER}`)
      .pipe(map((data) => data.results),
        tap((data) => {
          this._pokemons = data;
          StorageUtil.storageSave('pokemons', data);
        })
      );
  }
}
