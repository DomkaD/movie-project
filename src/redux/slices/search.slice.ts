import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {CompareType, ISearchState, ISearched, IFilter} from "../../interfaces";
import {searchService} from "../../services";


const initialState: ISearchState = {
    searched: [],
    genresSelected: 'all',
    sortBy: 'popularity.desc',
}

const getSimilar = createAsyncThunk<ISearched[] | [], { name: string }>(
    'searchSlice/GetSimilar',
    async ({name}, {rejectWithValue}) => {
        try {
            if (name.length<=1) return [];
            const {data} = await searchService.search(name)
            return data.results.slice(0, 6).filter(tape => tape.media_type === 'movie').map((band: CompareType): ISearched => {
                const new_item: ISearched = {
                    id: band.id,
                    poster_path: band.poster_path,
                    media_type: band.media_type
                }

                return new_item;
            })
        } catch (e) {
            return rejectWithValue((e as AxiosError).response?.data)
        }
    }
)

const searchSlice = createSlice({
    name: 'optionsSLice',
    initialState,
    reducers: {
        resetHeaderSearch: (state) => {
            state.searched = []
        },
        setFilter: (state, action: PayloadAction<IFilter>) => {
            if (action.payload.genresSelected) {
                state.genresSelected = action.payload.genresSelected.join(',')
            }
            if (action.payload.sortBy) {
                state.sortBy = action.payload.sortBy
            }

        },
        resetFilter: (state) => {
            state.genresSelected = 'all'
            state.sortBy = initialState.sortBy
        },
        setGenresSelected: (state, action: PayloadAction<string>) => {
            if (!state.genresSelected.includes(action.payload)) {
                state.genresSelected = action.payload
            }
        }
    },
    extraReducers: builder => builder
        .addCase(getSimilar.fulfilled, (state, action) => {
            state.searched = action.payload
        })
})


const {
    reducer: searchReducer, actions: {
        resetHeaderSearch,
        setFilter,
        resetFilter,
        setGenresSelected
    }
} = searchSlice

const searchAction = {
    getSimilar,
    resetHeaderSearch,
    setFilter,
    resetFilter,
    setGenresSelected
}

export {searchAction, searchReducer}
