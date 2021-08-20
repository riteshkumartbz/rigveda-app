import React from 'react';
import RecipeReviewCard from './card';
// display favourites using cards
const displayfavourites = ({sutralist=[],like:like}) => {
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

export default displayfavourites;