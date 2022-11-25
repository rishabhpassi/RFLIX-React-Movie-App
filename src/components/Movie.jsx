
import "../styles/banner.css";

import React,{useContext} from "react";
import { GlobalContext } from "./GlobalState";
import "../styles/card.css";
import { IMAGE_BASE_URL } from "../API";

import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { MovieControls } from "./MovieControls";




const Movie = ({movie,type}) => {
  console.log(movie);
  const [active, setActive] = useState(false)
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
    <div className="movie">
    <MovieControls  movie= {movie}/>
    
   

<img src={IMAGE_BASE_URL+movie.backdrop_path} alt="dd" className='poster'></img>
    <div className="movie-details">
      
        <div className="box">
        
            <h4 className="title">{movie.title}</h4>
            
            <p className="rating">{movie.vote_average}</p>
            
           
            
            
            
            

        </div>
    <div className="overview">
                    <h1>Overview</h1>
                    <h6>Release-Date:{movie.release_date}</h6>
                    {movie.overview}
                    <div className="more-info">
            <>
      {values.map((v, idx) => (
        <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
          More-info
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
       
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{movie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img src={IMAGE_BASE_URL+movie.backdrop_path} alt="dd" className='poster'></img>
        <h1>Overview</h1>
        <h2>Release-Date:{movie.release_date}</h2>
        <h2>Ratings- {movie.vote_average}</h2>
        <p>{movie.overview}</p>
        <p>{movie.credits}</p>
       
        <div className="controls">
            <button id={movie.id}className="btn" disabled={()=>addMovieToFavouritesDisabled} onClick={()=>addMovieToFavourites}>
                Add To Favourites
            </button>
            
            
            
            
          
        </div>
        
        



        

        </Modal.Body>
      </Modal>
    </>
                
                



            </div>

                </div>

            </div>
           
        </div>
        
        
        
        </>
    )
     
}
export default Movie;