import React from 'react';
import store from '../../store';
import SutraList from './SutraList';
// Fetch set containing favourites from store and get the data using map and display using Sutralist
const Favourites = (props) => {
    let state_data = store.getState();
    let fav = state_data.fav;
    let sutras = state_data.sutras;

    let sutralist = [];
    fav.forEach(element => {
        sutralist.push(sutras.get(element));
        return sutras.get(element);
    });
    // If there are no liked items, ask him to like then they will appear here
    if(sutralist.length == 0){
        return(
            <p>Like items on main page to view in favourites section</p>
        )
    }
    // render liked cards
    return (
        <>
        <SutraList  sutralist={sutralist}/>
        </>
    )

}

export default Favourites;