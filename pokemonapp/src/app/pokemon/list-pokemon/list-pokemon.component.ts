import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Pokemon } from "../pokemon";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-list-pokemon",
  templateUrl: "./list-pokemon.component.html",
  styles: [],
})
export class ListPokemonComponent {
  // states
  pokemonList: Pokemon[];

  constructor(private router: Router, private pokemonService: PokemonService) {}
  // Methods
  ngOnInit() {
    // this.pokemonList = this.pokemonService.getPokemonList();
    this.pokemonService.getPokemonList()
    .subscribe(pokemonList => this.pokemonList = pokemonList)
  }

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(["/pokemon", pokemon.id]);
  }
}
