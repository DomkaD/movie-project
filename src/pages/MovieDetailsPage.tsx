import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {IMovie} from "../interfaces";
import {movieService} from "../services";
import {MovieInfo} from "../components";

const MovieDetailsPage = () => {

    const {id} = useParams<{ id: string }>()

    const [movie, setMovie] = useState<IMovie>()

    useEffect(() => {
        if (id) {
            movieService.getMovieById(id).then(({data}) => {
                setMovie(data)
            })


        }
    }, [id])

    if (!movie) {
        return <h1 className={'loading'}>Loading......</h1>
    }

    return (
        <>
            <MovieInfo
                id={movie.id}
                title={movie.title}
                original_title={movie.original_title}
                poster_path={movie.poster_path}
                backdrop_path={movie.backdrop_path}
                release_date={movie.release_date}
                runtime={movie.runtime}
                genres={movie.genres}
                budget={movie.budget}
                revenue={movie.revenue}
                vote_average={movie.vote_average}
                overview={movie.overview}/>
        </>
    );
};

export {MovieDetailsPage};
