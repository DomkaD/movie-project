import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IGenre, IGenresState} from "../../interfaces";
import {genreService} from "../../services";



const initialState: IGenresState = {
    movieGenres: [],
    id: null,
    status: null,
    error: ''
}

const getMovieGenres = createAsyncThunk<IGenre[], void>(
    'genreSlice/getMovieGenre',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAllMovieGenre()
            return data.genres
        } catch (e) {
            return rejectWithValue((e as AxiosError).response?.data)
        }
    }
)

const genreSlice = createSlice({
    name: 'genreSLice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getMovieGenres.fulfilled, (state, action) => {
            state.movieGenres = action.payload
            state.error=''
        })
})



const {reducer:genreReducer,actions:{

}}=genreSlice

const genreActions={
    getMovieGenres
}

export {
    genreActions,
    genreReducer
}
