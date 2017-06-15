'use strict';

const PokeGrid = (data, update) => {
    const contgrid = $('<div class="container"></div>');
    const img = $(`<img src= "http://serebii.net/art/th/${data.entry_number}.png"/>`);
    const detail = $('<span>'+data.pokemon_species.name+'</span>');
    const namepoke = $('<span></span>');
    
    //console.log(data.entry_number);
    contgrid.append(img);
    contgrid.append(detail);
    contgrid.append(namepoke);

    return contgrid;
}

/*    const reRender = () => {
        const stationContainer = $('<div class="station-container"></div>');
        state.datapokemon.forEach((data)=>{
            stationContainer.append(PokeGrid(data));
        });

        return stationContainer;
    }*/