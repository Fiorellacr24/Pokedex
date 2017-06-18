'use strict';

const Modal = (data) => {
	const modal = $('<div id="modal1" class="modal"></div>');
	const contmodal = $('<div class="modal-content"></div>');
	const close = $('<span class="float-right modal-close">x</span>');
	const image = $(`<img src= "http://serebii.net/art/th/${data.entry_number}.png"/>`);
	const namepokem = $('<p class="pokename">'+data.pokemon_species.name+'</p>');

	contmodal.append(close);
	contmodal.append(image);
	contmodal.append(namepokem);
	modal.append(contmodal);
	

	close.on('click', () => {
		modal.remove();
		$('.modal-overlay').remove();    
	}); 

	return modal.modal();
}