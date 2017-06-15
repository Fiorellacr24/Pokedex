'use strict';

const PokeGrid = (data, update) => {
    const contgrid = $('<div class="container"></div>');
    const viewmodal = $('<div></div>')
    const a = $('<a href="#modal1"></a>');
    const img = $(`<img src= "http://serebii.net/art/th/${data.entry_number}.png"/>`);
    const namepoke = $('<span>'+data.pokemon_species.name+'</span>');

    //console.log(data.entry_number);
    a.append(img);
    viewmodal.append(a);
    contgrid.append(viewmodal);
    contgrid.append(namepoke);

    
    a.on('click',function(e){
        contgrid.append(Modal());
    });
    return contgrid;
}


/*    const reRender = () => {
        const stationContainer = $('<div class="station-container"></div>');
        state.datapokemon.forEach((data)=>{
            stationContainer.append(PokeGrid(data));
        });

        return stationContainer;
    }*/