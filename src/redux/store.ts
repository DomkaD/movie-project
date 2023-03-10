import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {authReducer, genreReducer, movieReducer, searchReducer} from "./slices";


const rootReducer = combineReducers({
    genreReducer,
    searchReducer,
    movieReducer,
    authReducer
})

const setUpStore = () => configureStore({
    reducer: rootReducer
})

const store = setUpStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export {store}

