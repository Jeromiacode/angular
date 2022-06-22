import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styles: [
  ]
})
export class SearchPokemonComponent implements OnInit {
  // Subject est une classe de rxjs qui permet de stocker les recherches de l'utilisateur
  searchTerms = new Subject<string>();
  // le $ a la fin est une convention qui permet de décrire le mot clé comme étant un observable (facultatif)
  pokemons$: Observable<Pokemon[]>

  constructor(private router: Router, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      // Départ
      // {...'a'.'ab'...'abz'.'ab'...'abc'.....}
      debounceTime(300),
      // Elimine les recherches faites dans un temps trop succin.
      // {...'ab'...'abz'...'abc'.....}
      distinctUntilChanged(),
      // Attendre u changement dans la recherche
      // {...'ab'......'abc'.....}
      switchMap((term) => this.pokemonService.searchPokemonList(term))
      // Observe que la dernière recherche (observable)
      // {....Observable<'ab'>............Observable<'abc'>......}
      // concatMap - mergeMap - switchMap
    )
  }

  search(term: string){
    // next est comme push mais avec un flux de données
    this.searchTerms.next(term)
  }

  goToDeatilPokemon(pokemon: Pokemon){
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link)
  }

}
