import {createSlice} from "@reduxjs/toolkit"

export const saveSlice = createSlice({
    name: "words",
    initialState: {
        words: []
    },
    reducers: {
        saveword: (state, action) => {
            console.log(action.payload)
            state.words = [...state.words, action.payload];
            console.log(state.words)
        },
    }
});

export const {saveword} = saveSlice.actions;

export default saveSlice.reducer;