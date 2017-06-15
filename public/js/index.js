'use strict';

const render = (root, data) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');
    //Componentes
    wrapper.append(Header());
    wrapper.append(Section());
    
    root.append(wrapper);
};

$( _ => {

    const root = $('.root');
    render(root);
});