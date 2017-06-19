'use strict';

const Search = (update) => {
    const parent = $('<div class="container search"></div>');
    const inputfield = $('<div class="input-field col s7"></div>');
    const icon = $('<span><i class="fa fa-search"></i></span>');
    const input = $('<input type="text"/>');
    const button = $('<button class="float-right">A - Z</button>');
    const row = $('<div class="row"></div>')
    const mostrar = $('<div></div>');

    inputfield.append(icon);
    inputfield.append(input);
    parent.append(button);
    parent.append(inputfield);
    parent.append(row);
    row.append(mostrar);

	input.on('keyup', (e) => {
		if(input.val() != 0){
            const value = filterByName(state.datapokemon.pokemon_entries, input.val());
            reRender(mostrar, value, update);
		}
	});
	
  state.datapokemon.pokemon_entries.forEach(function (e){ 
      mostrar.append(PokeGrid(e,update));
  });  
	
    return parent;
}

const reRender = (mostrar, value, update)=>{
    mostrar.empty();
	value.forEach((e)=> {
		mostrar.append(PokeGrid(e,update));
	});
};