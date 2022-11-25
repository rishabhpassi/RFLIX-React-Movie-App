import React, { useContext } from "react";
import { GlobalContext } from "./GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heart from "react-heart";
import { useState } from "react";



export const MovieControls = ({ type, movie }) => {
  const {removeMovieFromFAVOURITESLIST} = useContext(GlobalContext);
  const{
    addMovieToFavourites,FavouritesList
}= useContext(GlobalContext);
  const [active, setActive] = useState(false);
  function checkFavs(movie) {
    console.log(FavouritesList);
    const isFav = FavouritesList.find(item => {
      console.log('checking', item);
      return item.info.id === movie.info.id;
    });
    console.log('already in favs?', isFav);
    if (!isFav) {
      setActive(true);
      addMovieToFavourites(movie);
      
    
    } else {
      // remove
      removeMovieFromFAVOURITESLIST(movie.info.id);
      
      
      setActive(false);
    }
  }
  
 

  return (
    <div className="inner-card-controls">
      
      
       
        
        

          <div className="Favourites" style={{ width: "4rem" }}>
          <Heart isActive={active} onClick={() => {
            removeMovieFromFAVOURITESLIST(movie.id);
            checkFavs(movie)
          }} inactiveColor = "white" fill="white" animationScale = {1.2} animationTrigger = "both" animationDuration = {.2} className = "remove-fav"/>
        </div>
        
    

      
    </div>
  );
};