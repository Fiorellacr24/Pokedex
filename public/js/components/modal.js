'use strict';

const Modal = (data) => {
	const modal = $('<div id="modal1" class="modal"></div>');
	const contmodal = $('<div class="modal-content"></div>');
	const close = $('<span class="float-right modal-close">x</span>');
	const img = $(`<img class="image lazy" data-original= "http://serebii.net/art/th/${data.entry_number}.png"/>`);
	const namepoke = $('<p class="pokename">'+data.pokemon_species.name+'</p>');

	contmodal.append(close);
	contmodal.append(img);
	contmodal.append(namepoke);
	modal.append(contmodal);
	
	console.log(data.entry_number);

	close.on('click', () => {
		modal.remove();
		$('.modal-overlay').remove();    
	}); 

	return modal.modal();
}