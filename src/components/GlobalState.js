import React,{createContext,useReducer,useEffect} from "react";
import AppReducer from "./AppReducer";

//initial state
 const initialState = { 
     FavouritesList:localStorage.getItem('FavouritesList')? JSON.parse(localStorage.getItem('FavouritesList')): [],
     

 };

 export const GlobalContext = createContext(initialState);

 export const GlobalProvider = props =>{
     const[state,dispatch] = useReducer(AppReducer,initialState);
     useEffect(()=> {
         localStorage.setItem('FavouritesList',JSON.stringify(state.FavouritesList))
     },[state])

     const addMovieToFavourites = (movie) => {
         dispatch({type:"ADD_MOVIE_TO_FAVOURITESLIST",payload:movie })
     }
     
     const removeMovieFromFAVOURITESLIST = (id) => {
        dispatch({ type: "REMOVE_MOVIE_FROM_FAVOURITESLIST", payload: id });
      };


    



     return(
         <GlobalContext.Provider value={{FavouritesList: state.FavouritesList,
         
         addMovieToFavourites,removeMovieFromFAVOURITESLIST}}>
             {props.children}

         </GlobalContext.Provider>
     )
 }