'use strict';

const Section = () => {
    const parent = $('<div id="container"></div>');
    const inputfield = $('<div class="input-field col s6"></div>');
    const icon = $('<span><i class="fa fa-search "></i></span>');
    const input = $('<input type="text"/>');
    const button = $('<button class="float-right">A - Z</button>');
    
    inputfield.append(icon);
    inputfield.append(input);
    parent.append(button);
    parent.append(inputfield);
    
    return parent;
}