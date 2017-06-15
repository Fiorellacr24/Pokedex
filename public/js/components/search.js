'use strict';

const Search = (update) => {
    const parent = $('<div class="container"></div>');
    const inputfield = $('<div class="input-field col s7"></div>');
    const icon = $('<span><i class="fa fa-search"></i></span>');
    const input = $('<input type="text"/>');
    const button = $('<button class="float-right">A - Z</button>');
    const filter = $('<div class="filter"></div>');
    const mostrar = $('<div></div>');

    inputfield.append(icon);
    inputfield.append(input);
    parent.append(button);
    parent.append(inputfield);
    parent.append(mostrar);


  state.datapokemon.pokemon_entries.forEach(function (e){
      /*mostrar.append(`<img src="http://serebii.net/art/th/${e.entry_number}.png"/>`);*/  
      mostrar.append(PokeGrid(e,update));
  });  

    return parent;
}