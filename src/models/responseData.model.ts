import { Pokemon } from './pokemon.model';

export interface ResponseData {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}
