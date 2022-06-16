import { Component } from '@angular/core';
// import { POKEMONS } from './pokemon/mock-pokemon-list';
// import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  //   // states
  //   pokemonList: Pokemon[] = POKEMONS;
  //   pokemonSelected: Pokemon | undefined

  // // methods
  // selectPokemon(pokemonId: string){
  //   // Le + permet de transformer la chaine de caractère en nombre
  //   const pokemon: Pokemon | undefined = this.pokemonList.find(poke => poke.id == +pokemonId)
  //   if (pokemon) {
  //     console.log(`Vous avez cliquez sur le pokemon ${pokemon.name}`);
  //     this.pokemonSelected = pokemon;
  //   }
  //   else{
  //     console.log('Le pokemon demandé n\'existe pas !');
  //     this.pokemonSelected = pokemon;
  //   } 
  // }
}
