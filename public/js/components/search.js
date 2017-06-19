'use strict';

const Search = (update) => {
    const parent = $('<div class="container search"></div>');
    const inputfield = $('<div class="input-field col s7"></div>');
    const icon = $('<span><i class="fa fa-search"></i></span>');
    const input = $('<input type="text"/>');
    const button = $('<button class="float-right">A - Z</button>');
    const row = $('<div class="row"></div>')
    const mostrar = $('<div></div>');
    const filter = $('<div class="filter"></div>');

    inputfield.append(icon);
    inputfield.append(input);
    parent.append(button);
    parent.append(inputfield);
    parent.append(row);
    row.append(mostrar);

	input.on('keyup', (e) => {
		if(input.val() != 0){
			const value = filterByName(state.namepokemon, input);
			reRender(value, parent.next());
		}
	});
	
  state.datapokemon.pokemon_entries.forEach(function (e){ 
      mostrar.append(PokeGrid(e,update));
	  //mostrar.append(Modal(e));
  });  
	
    return parent;
}

const reRender = (filter, value, update)=>{
    filter.empty();
	value.forEach((e)=> {
		filter.append(PokeGrid(e,update));
	});
};