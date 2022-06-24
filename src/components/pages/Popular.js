import React from 'react';
import axios from 'axios';
import {useState, useEffect} from "react";
import {APIKEY} from "../../lib/ApiKey";
import MovieCard from "../MovieCard/MovieCard";

const Popular = () => {
    let [popular, setPopular] = useState([])

    const getPopular = async () => {
        const url = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`)
        const {data} = await url
        await setPopular(data.results)
    }

    //console.log(popular)

    useEffect(() => {
        getPopular()
    }, [])
    return (
        <>
           <div className={'py-3'}>
               <div className={'container'}>
                   <div className={'row'}>
                       {
                           popular.map((el) => <MovieCard key={el.id} movie={el}/>)
                       }
                   </div>
               </div>
           </div>
        </>
    );
};

export default Popular;