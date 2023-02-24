import {FC} from "react";
import {Link} from "react-router-dom";

import {ImagePreview} from "../ImagePreview/ImagePreview";
import {StarsRating} from "../StarsRating/StarsRating";
import {ICardsProps} from "../../interfaces";

import scss from './MovieListCard.module.scss'



const MovieListCard: FC<ICardsProps> = ({movie}) => {
    return (
        <Link to={`/movie/${movie.id}`}>
            <div className={scss.card}>
                <ImagePreview alt={movie.title} genre_ids={movie.genre_ids} url={movie.poster_path} type={"movie"}/>
                <div className={scss.card__info}>
                    <h1>{movie.title}</h1>
                    <StarsRating rating={movie.vote_average} color={"yellow"}/>
                    <p>Release date: {movie.release_date}</p>
                    <p>Rating: {movie.vote_average}</p>
                </div>
            </div>

        </Link>
    );
};

export {MovieListCard};
