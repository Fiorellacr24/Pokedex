'use strict';

function filterByPokemon(pokemons,query) {
  const pokemonFiltered = pokemons.filter((pokemon)=>{
      return pokemon.pokemon_species.name.indexOf(query.toLowerCase())!=-1;
  });

  return pokemonFiltered;
}