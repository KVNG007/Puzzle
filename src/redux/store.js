import { configureStore } from "@reduxjs/toolkit";
import wordReducer from "./word"
import wordsReducer from "./save"
import solutionReducer from "./solution"

export default configureStore({
    reducer:{
        word : wordReducer,
        save : wordsReducer,
        solution : solutionReducer,
    }
});