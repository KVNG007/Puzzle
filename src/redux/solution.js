import {createSlice} from "@reduxjs/toolkit"

export const counterSlice = createSlice({
    name: "solution",
    initialState: {
        solution: [["LUCID", "MUSIC", "HUNTS", "MASKS"], ["w-10w-09w-08w-07w-06", "w-25w-19w-13w-07w-01", "w-20w-19w-18w-17w-16", "w-11w-12w-13w-14w-15"]]
    },
    reducers: {
        update: (state, action) => {
            state.solution = [state.solution[0].filter((word)=> word !== action.payload), state.solution[1]];
        },
       
    }
});

export const {update} = counterSlice.actions;

export default counterSlice.reducer;