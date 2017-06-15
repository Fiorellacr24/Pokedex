'use strict';

const Modal = () => {
    const modal = $('<div id="modal1" class="modal"></div>');
    const contmodal = $('<div class="modal-content"></div>');
    const close = $('<div class="modal-close">x</div>');
    const h4 = $('<h4>Holi</h4>');

    contmodal.append(h4);
    contmodal.append(close);
    modal.append(contmodal);

    close.on('click', () => {
        modal.remove();
        $('.modal-overlay').remove();    
    });

    return modal.modal();
}