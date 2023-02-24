import {IResultsMovie} from "./movie.interface";


export interface ISearched {
    id: number,
    poster_path: string,
    media_type: string,
    name?: string,
    title?: string
}


export interface ISearchState {
    searched: ISearched[],
    genresSelected: string,
    sortBy: 'popularity.asc' | 'popularity.desc' | 'release_date.asc' | 'release_date.desc'
}

export type CompareType = IResultsMovie

export interface simpleSearchRes {
    results: CompareType[]
}

export interface IFilter {
    genresSelected: string[]
    sortBy: 'popularity.asc' | 'popularity.desc' | 'release_date.asc' | 'release_date.desc'
}