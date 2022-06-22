import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
// TODO etudier les méthodes rxjs
import { catchError, Observable, of, tap } from "rxjs";
import { Pokemon } from "./pokemon";

@Injectable()
export class PokemonService {
  constructor(private http: HttpClient) {}
  
  private log(response: any){
    console.table(response)
  }

  private handleError(error: Error, errorValue: any){
    console.error(error)
    return of(errorValue)
  }

  getPokemonList(): Observable<Pokemon[]> {
    // On fait une requete get et on reçois l'Observable avec le tableau contenant les réponses.
    return this.http.get<Pokemon[]>("api/pokemons").pipe(
      tap((pokemonList) => this.log(pokemonList)),
      catchError((err) => this.handleError(err, []))
    )
  }
  getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
    // return POKEMONS.find((pokemon) => pokemon.id == pokemonId);
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((pokemon) => this.log(pokemon)),
      catchError((err) => this.handleError(err, undefined))
      )
    }

    searchPokemonList(term: string): Observable<Pokemon[]>{
      if (term.length <= 1) {
        return of([]);
      }
      return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
        tap((pokemon) => this.log(pokemon)),
        catchError((err) => this.handleError(err, []))
      )
    }

    addPokemon(pokemon: Pokemon): Observable<Pokemon>{
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json'})
      }
      return this.http.post<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
        tap((res) => this.log(res)),
        catchError((err)=> this.handleError(err, null))
      )
    }
    
    // Because of the angular http service, the answer of the API is null (res) otherwise it would be <Pokemon | undefined>
    updatePokemon(pokemon: Pokemon): Observable<null>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    }
    return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
      tap((res) => this.log(res)),
      catchError((err)=> this.handleError(err, null))
    )
  }

  deletePokemonById(pokemonId: number): Observable<null>{
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
      tap((pokemon) => this.log(pokemon)),
      catchError((err) => this.handleError(err, undefined))
    )
  }

  getPokemonTypeList(): string[] {
    return [
      "Plante",
      "Feu",
      "Eau",
      "Insecte",
      "Normal",
      "Electrik",
      "Poison",
      "Fée",
      "Vol",
      "Combat",
      "Psy",
    ];
  }
}
