'use strict';

const Modal = (data) => {
	const modal = $('<div id="modal1" class="modal"></div>');
	const contmodal = $('<div class="modal-content"></div>');
	const close = $('<span class="float-right modal-close ico-close">&times;</span>');
	const namepokem = $('<p class="pokename title-modal">' +data.pokemon_species.name+'</p>');
	const image = $(`<img class="padd-left left" src= "http://serebii.net/art/th/${data.entry_number}.png"/>`);
	//const infopokemon = $('<p>' + data.flavor_text_entries[3].flavor_text + '</p>');
	const contdescr = $('<div class="description center-align"></div>');
	const altura = $('<span>Altura: ' + + '</span>');
	const peso = $('<span>Peso: ' + +'</span>')
	const categoria = $('<span>Categoria: '+ +'</span>')
	const habilidad = $('<span>Habilidad: '+ +'</span>')
	
	contmodal.append(close);
	contmodal.append(namepokem);
	contmodal.append(image);
	contdescr.append(altura);
	contdescr.append(peso);
	contdescr.append(categoria);
	contdescr.append(habilidad);
	contmodal.append(contdescr);
	modal.append(contmodal);
	

	close.on('click', () => {
		modal.remove();
		$('.modal-overlay').remove();    
	}); 

	return modal.modal();
}