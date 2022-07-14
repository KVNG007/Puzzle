import {createSlice} from "@reduxjs/toolkit"

export const counterSlice = createSlice({
    name: "word",
    initialState: {
        word: []
    },
    reducers: {
        addword: (state, action) => {
            state.word = [...state.word, action.payload ];
        },
        removeword: (state, action) => {
            state.word = state.word.filter((letta)=> letta.id !== action.payload.id);
        },
        resetword: (state) => {
            state.word = []
        },
       
    }
});

export const {addword, removeword, resetword} = counterSlice.actions;

export default counterSlice.reducer;