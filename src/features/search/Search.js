import React, { useState , useEffect } from 'react';
import SearchBar from './SearchBar';
import SutraList from './SutraList';
import store from '../../store';

//initially fetching all data then applying filter, url does not support pagination
// search implemented for one feature only
// once the fetch works(certification issue), we can generate url based on search filters and fetch data accordingly
const Search = (props) => {
    const [input1,setInput1] = useState('');
    const [sutralistdefault, setsutralistdefault] = useState();
    const [sutralist, setsutralist] = useState();


    // let header = new Headers();
    // headers.append('Access-Control-Allow-Origin', 'http://betaphoenix.c.googlers.com:3000');
    // headers.append('Access-Control-Allow-Credentials', 'true');

    const fetchdata = async(url) => {
        let opt = {
            options:'GET',

        }
    // I was not able to fetch data because of google security issues. So working with dummy data.
		//to test for other url data fetch, change url variable initialised below
        // return await fetch(url,opt).then(response => response.json()).then(data => {
        //     setsutralist(data);
        //     setsutralistdefault(data);
        //     console.log(data);
        // });
        
        console.log(url);
        let data = [
            {
              "mandal": 1, 
              "meter": "Gayatri", 
              "sukta": 1, 
              "sungby": "Madhuchchhanda Vaishwamitra", 
              "sungbycategory": "human male", 
              "sungfor": "Agni", 
              "sungforcategory": "divine male"
            }, 
            {
              "mandal": 2, 
              "meter": "Gayatri", 
              "sukta": 2, 
              "sungby": "Valmiki", 
              "sungbycategory": "human male", 
              "sungfor": "Vayu", 
              "sungforcategory": "divine male"
            }, 
            {
              "mandal": 1, 
              "meter": "Gayatri", 
              "sukta": 2, 
              "sungby": "Madhuchchhanda Vaishwamitra", 
              "sungbycategory": "human male", 
              "sungfor": "Indra", 
              "sungforcategory": "divine male"
            }, 
            {
              "mandal": 1, 
              "meter": "Gayatri", 
              "sukta": 2, 
              "sungby": "Madhuchchhanda Vaishwamitra", 
              "sungbycategory": "human female", 
              "sungfor": "Saraswati", 
              "sungforcategory": "divine female"
            }, 
            {
              "mandal": 1, 
              "meter": "Gayatri", 
              "sukta": 2, 
              "sungby": "Madhuchchhanda Vaishwamitra", 
              "sungbycategory": "human male", 
              "sungfor": "Varun", 
              "sungforcategory": "divine male"
            }, 
            {
              "mandal": 1, 
              "meter": "Gayatri", 
              "sukta": 3, 
              "sungby": "Madhuchchhanda Vaishwamitra", 
              "sungbycategory": "human male", 
              "sungfor": "Ashwinikumar", 
              "sungforcategory": "divine male"
            }, 
            {
              "mandal": 1, 
              "meter": "Gayatri", 
              "sukta": 3, 
              "sungby": "Madhuchchhanda Vaishwamitra", 
              "sungbycategory": "human female", 
              "sungfor": "Indra", 
              "sungforcategory": "divine female"
            }, 
            {
              "mandal": 1, 
              "meter": "Gayatri", 
              "sukta": 3, 
              "sungby": "Madhuchchhanda Vaishwamitra", 
              "sungbycategory": "human male", 
              "sungfor": "Vishwadeva", 
              "sungforcategory": "divine male"
            }, 
            {
              "mandal": 1, 
              "meter": "Gayatri", 
              "sukta": 4, 
              "sungby": "Madhuchchhanda Vaishwamitra", 
              "sungbycategory": "human male", 
              "sungfor": "Indra", 
              "sungforcategory": "divine male"
            }, 
            {
              "mandal": 1, 
              "meter": "Gayatri", 
              "sukta": 5, 
              "sungby": "Madhuchchhanda Vaishwamitra", 
              "sungbycategory": "human male", 
              "sungfor": "Indra", 
              "sungforcategory": "divine male"
            }, 
            {
              "mandal": 1, 
              "meter": "Gayatri", 
              "sukta": 6, 
              "sungby": "Madhuchchhanda Vaishwamitra", 
              "sungbycategory": "human male", 
              "sungfor": "Indra", 
              "sungforcategory": "divine male"
            }, 
            {
              "mandal": 1, 
              "meter": "Gayatri", 
              "sukta": 6, 
              "sungby": "Madhuchchhanda Vaishwamitra", 
              "sungbycategory": "human male", 
              "sungfor": "Marut", 
              "sungforcategory": "divine male"
            }, 
            {
              "mandal": 1, 
              "meter": "Gayatri", 
              "sukta": 7, 
              "sungby": "Madhuchchhanda Vaishwamitra", 
              "sungbycategory": "human male", 
              "sungfor": "Indra", 
              "sungforcategory": "divine male"
            }, 
            {
              "mandal": 1, 
              "meter": "Gayatri", 
              "sukta": 8, 
              "sungby": "Madhuchchhanda Vaishwamitra", 
              "sungbycategory": "human male", 
              "sungfor": "Indra", 
              "sungforcategory": "divine male"
            }, 
        ]
        setsutralist(data);
        setsutralistdefault(data);
        // fetch data once and store it, to avoid delays in furthur calls
        let filtered = data.map(unitdata => {
             let identifier = unitdata.mandal+unitdata.sungfor+unitdata.sukta;
             store.dispatch({type: 'todos/added',payload: {id:identifier,data:unitdata}});
             return identifier;
        });
    }
    // url to fetch data from and other test urls
    const url = "https://api-rv.herokuapp.com/rv/v1/resources/all"
    // const url = "https://restcountries.eu/rest/v2/all"

    // set data based on search input field
    const updateinput = async (input) => {
        const filtered = sutralistdefault.filter(sutra => {
            return sutra.meter.toLowerCase().includes(input.toLowerCase());
        })
        setInput1(input);
        setsutralist(filtered);

    }
    
    useEffect( () => {fetchdata(url)},[]);
    // rendering the searchbar and filtered results based on it
    return (
        <>
            <h3>Filter by meter</h3>
            <SearchBar input={input1} onChange={updateinput} />
            <SutraList  sutralist={sutralist}/>
        </>
    );

}
export default Search;