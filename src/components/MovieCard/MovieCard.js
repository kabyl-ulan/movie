import React from 'react';
import {Link} from "react-router-dom";

const MovieCard = ({movie}) => {
    const {title, poster_path, release_date, id} = movie
    return (
        <>
            <div className={'col-3'}>
                <div className={'p-1 my-3'}>
                    <div className={'d-flex justify-content-center'}>
                        <Link to={`/movies/:${id}`}>
                            <img
                                src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`}
                                alt={`${title}`}/>
                        </Link>
                    </div>
                    <div className={'px-2 d-flex flex-column'}>
                        <h4 className={'fs-6 text-center fw-bold py-1'}>{title}</h4>
                        <h4 className={'fs-6 text-center'}>{release_date}</h4>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MovieCard;