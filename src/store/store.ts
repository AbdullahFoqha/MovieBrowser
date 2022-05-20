import {configureStore} from "@reduxjs/toolkit";
import movieReducer from "./reducers/moviesReducer";
import peopleReducer from "./reducers/peopleReducer";
import configReducer from "./reducers/configReducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        movies: movieReducer,
        people: peopleReducer,
        config: configReducer
    }
})

export type StoreState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch






// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<StoreState> = useSelector
