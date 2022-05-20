import {createSlice} from "@reduxjs/toolkit";
import {darkColors, Colors, lightColors} from "../../config/colors";

export interface Configuration {
    colors: Colors
}

const initialState: Configuration = {colors: darkColors}

const configReducer = createSlice({
    name: 'configuration',
    initialState,
    reducers: {
        toggleTheme: ((theme, action) => {
            let c = action.payload.id
            theme.colors = lightColors
        })
    }
})

export const {toggleTheme} = configReducer.actions
export default configReducer.reducer
