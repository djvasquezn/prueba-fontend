import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemonCol : Pokemon[];
  pokemon : Pokemon;
  paramBusqueda : any;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon() {
    this.pokemonService.getPokemonById(this.paramBusqueda).subscribe(item => {
      console.log('item', item);
      if (item) {
        this.pokemon = item
      } else {
        this.getPokemonByName();
      }
    })
    
  }

  getPokemonByName() {
    this.pokemonService.getAllPokemons().subscribe(data => {
      this.pokemonCol = data;
      if (this.pokemonCol) {
        this.pokemon = this.pokemonCol.find(item=> item.name == this.paramBusqueda);
      } else {
        alert('No se encontro el pokemon!!')
      }
    });
  }

}
