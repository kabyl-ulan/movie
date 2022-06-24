import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {APIKEY} from "../../lib/ApiKey";
import MovieCard from "../MovieCard/MovieCard";

const Latest = () => {
    const [latest, setLatest] = useState([])
    //https://api.themoviedb.org/3/movie/latest?api_key=${APIKEY}&language=en-US
    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/latest?api_key=${APIKEY}&language=en-US`)
            .then(({data}) => {
                if (typeof data === 'object') {
                    setLatest([data])
                } else {
                    setLatest(data)
                }
            })
    }, [])

    // if (typeof latest === 'object') {
    //     return <MovieCard movie={latest}/>
    // }
    // else if(Array.isArray(latest))
    return (
        <>
            <div className={'container'}>
                <div className="row">
                    {
                        latest.map(el => <MovieCard movie={el}/>)
                    }
                </div>
            </div>
        </>
    );
};

export default Latest;