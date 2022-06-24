import React from 'react';
import axios from 'axios';
import {useState, useEffect} from "react";
import {APIKEY} from "../../lib/ApiKey";
import MovieCard from "../MovieCard/MovieCard";

const TopRated = () => {
    let [topRated, setTopRated] = useState([])

    const getTopRated = async () => {
        const url = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`)
        const {data} = await url
        await setTopRated(data.results)
    }

    //console.log(topRated)

    useEffect(() => {
        getTopRated()
    }, [])
    return (
        <>
            <div className={'py-3'}>
                <div className={'container'}>
                    <div className={'row'}>
                        {
                            topRated.map((el) => <MovieCard key={el.id} movie={el}/>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopRated;