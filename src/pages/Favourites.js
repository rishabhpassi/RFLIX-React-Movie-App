import React, { useContext } from "react";
import { GlobalContext } from "../components/GlobalState";
import Movie from "../components/Movie";
import Notification from "react-notifications/lib/Notification";





export const Favourites = (movie) => {
  const { FavouritesList } = useContext(GlobalContext);
   
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My FavouritesList</h1>
          <h6>Click on Heart to remove from favourites!</h6>
          <Notification/>

          <span className="count-pill">
            {FavouritesList.length} {FavouritesList.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>
        

        {FavouritesList.length > 0 ? (
          <div className="movie-grid">
            {FavouritesList.map((movie) => (
            
              
              <Movie key={movie.id} movie={movie.info} />
              
              
              
             
            ))}
            
            
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};
export default Favourites;