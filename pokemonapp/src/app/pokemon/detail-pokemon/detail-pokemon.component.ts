import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { Pokemon } from '../pokemon';
import { PokemonService } from "../pokemon.service";

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService) { }

  ngOnInit() {
    // .snapshot.paramMap (mapping de tout les paramètres de l'Url à l'instant T)
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');

    if (pokemonId) {
      // this.pokemon = this.pokemonService.getPokemonById(+pokemonId)
      this.pokemonService.getPokemonById(+pokemonId)
      .subscribe(pokemon => this.pokemon = pokemon)
    }
  }

  goBack(){
    this.router.navigate(['/pokemons'])
  }
 
  gotToEditPokemon(pokemon: Pokemon){
    this.router.navigate(['/edit/pokemon', pokemon.id])
  }
}
