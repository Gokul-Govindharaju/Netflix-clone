import { configureStore } from "@reduxjs/toolkit";
import netflixReducer from './Movieslice'
export const store = configureStore({
    reducer: {
        netflix:netflixReducer,
    },
})