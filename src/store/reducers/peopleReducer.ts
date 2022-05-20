import {createSlice} from "@reduxjs/toolkit";

const peopleReducer = createSlice({
    name: 'peopleReducer',
    initialState: new Array<{ name: string, age: number }>(),
    reducers: {
        addPerson: ((people, action) => {
            people.push({name: action.payload.name, age: 25})
        })
    }
})

export const {addPerson} = peopleReducer.actions
export default peopleReducer.reducer
