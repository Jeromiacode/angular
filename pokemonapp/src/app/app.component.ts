import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  template: `<h1>Welcome to you!</h1>`
})
export class AppComponent implements OnInit{
  // states
    pokemonList: Pokemon[] = POKEMONS;

  // methods
  ngOnInit(){
    console.log(this.pokemonList);
    this.selectPokemon(this.pokemonList[0]);
  }
  selectPokemon(pokemon: Pokemon){
    console.log('Vous avez cliqué sur le pokemon', pokemon.name);
  }
}
