import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { TMBD_BASE_URL,API_KEY } from "../assets/Api/Api";
import axios from'axios';
const initialState = {
     movies: [],
    //  genres: [],
     upmovie:[],
     topmovie:[],
     original:[],
};

// export const fetchGenres = createAsyncThunk("netflix/genres", async ()=>{
//  const {data:{genres},} = await axios.get(`${TMBD_BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
 
// // console.log(genres);
//  return genres;
// });
 
export const fetchpopular = createAsyncThunk("netflix/popular", async() =>{
  const {data:{results}} = await axios.get(`${TMBD_BASE_URL}/movie/popular?api_key=${API_KEY}`);
//   console.log(results);
  return results;
});

export const fetchUpcoming = createAsyncThunk("netflix/upcoming", async() =>{
  const {data:{results}} = await axios.get(`${TMBD_BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`);
  
  return results;
})
export const fetchtoprated = createAsyncThunk("netflix/toprated", async() =>{
  const {data:{results}} = await axios.get(`${TMBD_BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
  
  return results;
})
export const fetchNetflixOriginals = createAsyncThunk("netflix/original", async() =>{
  const {data:{results}} = await axios.get(`${TMBD_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`);
  
  return results;
})

const NetflixSlice = createSlice({
    name:"Netflix",
    initialState,
    extraReducers:{
        // [fetchGenres.fulfilled]:(state,action) =>{
        //     state.genress=action.payload;
        //     console.log("fulfilled");
        // },
        [fetchpopular.fulfilled]:(state,action) =>{
            state.movies=action.payload;
            console.log("fulfilled");
        },
        [fetchUpcoming.fulfilled]:(state,action) =>{
            state.upmovie=action.payload;
            console.log("fulfilled");
        },
        [fetchtoprated.fulfilled]:(state,action) =>{
            state.topmovie=action.payload;
            console.log("fulfilled");
        },
        [fetchNetflixOriginals.fulfilled]:(state,action) =>{
            state.original=action.payload;
            console.log("fulfilled");
        },
        
    }

})

export default NetflixSlice.reducer;