import {FC, useEffect} from "react";

import {Header, MovieList} from "../components";
import {useAppDispatch, useAppSelector} from "../hooks";
import {movieActions} from "../redux";


const MainPage: FC = () => {


    const {nowPlayingMovies, trendingMovies} = useAppSelector(state => state.movieReducer)


    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(movieActions.getNowPlaying())
        dispatch(movieActions.getTrendingMovies())
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [dispatch])

    if(!nowPlayingMovies.length || !trendingMovies.length){
        return <h1 className={'loading'}>Loading...</h1>
    }

    return (
        <main>
            {
                    <Header/>
            }


            <MovieList/>
        </main>
    );
};

export {MainPage};
