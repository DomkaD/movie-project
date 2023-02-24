export interface IResultsMovie {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    name: string,
    id: number,
    media_type: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}

export interface IMovieInitialState {
    page: number,
    movies: IResultsMovie[],
    nowPlayingMovies: IResultsMovie[],
    trendingMovies: IResultsMovie[],
    total_results: number,
    total_pages: number,
    currentPage: number,
    loading:boolean
}

export interface IMoviesService {
    results: IResultsMovie[],
    total_pages: number
}
export interface IGenres {
    id: number,
    name: string,
}
export interface ICardsProps {
    movie: {
        id: number,
        title: string,
        vote_average: number,
        poster_path: string,
        genre_ids: number[],
        release_date: string,
        backdrop_path: string,
        overview: string

    }
}

export interface IMovie {

    backdrop_path: string,
    budget: number,
    genres: IGenres[],
    id: number,
    original_title: string,
    overview: string,
    poster_path: string,
    release_date: string,
    revenue: number,
    runtime: number,
    title: string,
    vote_average: number,
}






