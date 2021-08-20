import { react } from "@babel/types"
import { action } from "commander";
import { startCase } from "lodash";
import React from 'react';
// it contains methods to update store 
var initialstate = {
    liked:[],
    fav: new Set(),
    sutras: new Map()
}
export default function appreducer(state=initialstate,action){
    switch (action.type){
        // once item is liked/unliked, update the set 
        case 'todos/liked': {
            let newfav = new Set(state.fav);
            if(newfav.has(action.payload)){
                newfav.delete(action.payload);
            }
            else{
                newfav.add(action.payload);
            }
            return {
                ...state,
                fav: newfav,
                liked: state.liked.map(todo =>{
                    if(todo.id!==action.payload){
                        return todo;
                    }
                    return{
                        ...todo,
                        likes: !todo.likes
                    }
                })
            }
        }
        case 'todos/added': {
            // add item to map 
            let item;
            let newsutras = new Map(state.sutras);
            newsutras.set(action.payload.id,action.payload.data);
            if(state.liked){
                item=state.liked.slice();
                item.push({id:action.payload.id,likes:false});
            }
            else{
                item=[{id:action.payload.id,likes:false}];
            }
            return {
                ...state,
                sutras: newsutras,
                liked: item
            }
        }
        case 'todos/deleteallliked': {
            // to delete all favourites, clear the fav set
            return {
                ...state,
                fav: new Set(),
                liked: state.liked.map(todo => {
                    return{
                        ...todo,
                        liked: false
                    }
                })
            }
        }
        default: 
            return state
    }
    
}
// to send state,initial like state for each sutra once we fetch the data