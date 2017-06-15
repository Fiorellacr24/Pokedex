'use strict';

const Modal = () => {
    const modal = $('<div id="modal1" class="modal"></div>');
    const contmodal = $('<div class="modal-content"></div>');
    const close = $('<span class="float-right modal-close">x</span>');
    const h4 = $('<h4>Holi</h4>');

    contmodal.append(close);
    contmodal.append(h4);
    modal.append(contmodal);

    close.on('click', () => {
        modal.remove();
        $('.modal-overlay').remove();    
    });

    return modal.modal();
}