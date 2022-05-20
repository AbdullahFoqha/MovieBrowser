import {createSlice} from "@reduxjs/toolkit";
import Movie from "../../api/models/movie";
import {shuffleArray} from "../../utility/util";

const moviesSlice = createSlice({
    name: 'Movies',
    initialState: new Array<Movie>(),
    reducers: {
        shuffleMovies: movies => shuffleArray(movies)
    }
})

export const {shuffleMovies} = moviesSlice.actions

export default moviesSlice.reducer


