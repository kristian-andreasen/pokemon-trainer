import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
//import { environment } from 'src/environments/environment';
//const { apiPokemons } = environment;

@Injectable({
  providedIn: 'root',
})
export class PokemonCatalogueService {
  constructor(private readonly http: HttpClient) {}

  public fetchPokemons() {
    //this.http.get(apiPokemons).subscribe();
    return this.http.get('https://pokeapi.co/api/v2/pokemon');
  }
}
