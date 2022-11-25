
import "../styles/banner.css";
import React,{useContext} from "react";
import { GlobalContext } from "./GlobalState";

import { IMAGE_BASE_URL } from "../API";
import { Modal } from "react-bootstrap";
import { useState } from "react";




const Banner = ({movie}) => {
            const{
              addMovieToFavourites,FavouritesList
          }= useContext(GlobalContext);
          // console.log(movie.info);
          let storedMovie = FavouritesList.find(o => o.id === movie.id);
          

          const addMovieToFavouritesDisabled = storedMovie ? true :false ;

          const values = [true];
          const [fullscreen, setFullscreen] = useState(true);
          const [show, setShow] = useState(false);
          function handleShow(breakpoint) {
              setFullscreen(breakpoint);
              setShow(true);
            }

  
  return (
    <>
      
          
      <div>
        {values.map((v, idx) => (
          <a href="#3" key={idx} className="hello-1" onClick={() => handleShow(v)}>
            <div className="movies">
            <h5>{movie.title}</h5>
            <img src={"https://image.tmdb.org/t/p/w1280" + movie.backdrop_path} alt={movie.path} />
          </div>
            {typeof v === 'string' && `below ${v.split('-')[0]}`}
          </a>

            
          
        ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
              <Modal.Header closeButton>
                <Modal.Title>{movie.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <img src={IMAGE_BASE_URL+movie.poster_path} alt="dd" className='poster'></img>
              <h1>Overview</h1>
              <h2>Release-Date:{movie.release_date}</h2>
              <h2>Ratings- {movie.vote_average}</h2>
              <p>{movie.overview}</p>
            
              
        
        



        

                  </Modal.Body>
                </Modal>
        </div>
      
     </>
  )
}
export default Banner;