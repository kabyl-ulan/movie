import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../lib/ApiKey";
import {useParams} from "react-router-dom";

const Actors = () => {
    const movieID = useParams()
    const [actors, setActors] = useState([])
    //https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${APIKEY}&language=en-US&page=1
    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${APIKEY}&language=en-US&page=1`)
            .then(({data}) => setActors(data))
    }, [])
    return (
        <>
            <div className={'container'}>
                {
                    actors.map(el => (
                        <div>
                            <h3>{el.name}</h3>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default Actors;

