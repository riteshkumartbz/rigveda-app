import React from 'react';
import ReactTable from "react-table";  
import store from '../../store';
import RecipeReviewCard from './card';
// displaying filtered list in form of cards
const SutraList = ({sutralist=[]}) =>  {
    return (
        <>
        {
            sutralist.map((data) => {
                if (data) {
                    let id =data.mandal+data.sungfor+data.sukta;
                    return (
                        <div >
                            <br/>
                            {RecipeReviewCard(data)}
                            
                        </div>
                        
                    )
                }
                return null
            })
        }
        </>
    );
}

export default SutraList;