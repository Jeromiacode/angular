import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // .snapshot.paramMap (mapping de tout les paramètres de l'Url à l'instant T)
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    this.pokemonList = POKEMONS;

    if (pokemonId) {
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
    }
  }

  goBack(){
    this.router.navigate(['/pokemons'])
  }
}
