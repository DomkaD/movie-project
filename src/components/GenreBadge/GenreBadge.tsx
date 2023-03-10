import {FC, useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../redux";

import scss from './GenreBadge.module.scss'

export interface IBadgePros {
    genresIds: number[],
    type: 'movie'
}

const GenreBadge: FC<IBadgePros> = ({genresIds, type}) => {

    const {movieGenres} = useAppSelector(state => state.genreReducer)

    const dispatch = useAppDispatch()


    useEffect(() => {
        if (!movieGenres.length && type === 'movie') {
            dispatch(genreActions.getMovieGenres)
        }
    }, [])


    const filtered =  movieGenres.filter(genre => genresIds.includes(genre.id))

    return (
        <div className={scss.badge}>
            {genresIds.length > 0 ? filtered.map(genre => <div key={genre.id}
                                                               className={scss.badge__info}>{genre.name}</div>) : null}
        </div>
    );
};

export {GenreBadge};
