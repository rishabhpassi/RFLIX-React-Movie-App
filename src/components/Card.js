/* eslint-disable default-case */
import React,{useContext} from "react";
import { GlobalContext } from "./GlobalState";
import "../styles/card.css";
import { IMAGE_BASE_URL } from "../API";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import Heart from "react-heart";
import { Alert } from "bootstrap";



const Card = (movie) => {

 
  const [active, setActive] = useState(false);
    const{
        addMovieToFavourites,FavouritesList
    }= useContext(GlobalContext);
    
    let storedMovie = FavouritesList.find(o => o.id === movie.info.id);

    const addMovieToFavouritesDisabled = storedMovie ? true :false ;
   

    
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const {removeMovieFromFAVOURITESLIST} = useContext(GlobalContext);
    const [show, setShow] = useState(false);
    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
      }


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
      function checkFavs1(movie) {
        console.log(FavouritesList);
        const isFav = FavouritesList.find(item => {
          console.log('checking', item);
          return item.info.id === movie.info.id;
        });
        console.log('already in favs?', isFav);
        if (!isFav) {
          setActive(true);
          addMovieToFavourites(movie);
          alert('Movie Added to Favourites!!')
        
          
        
        } else {
          // remove
          removeMovieFromFAVOURITESLIST(movie.info.id); 
          setActive(false);
         alert('Removed From Favourites!!')
          
        }
      }
      
    
      
      
      
    
    return(
        <>
        
        
       
        
        <div className="movie">
        <div className="Favourites" style={{ width: "4rem" }}>
          <Heart isActive={active}
           disabled={addMovieToFavouritesDisabled} 
            onClick={() => {
              
            checkFavs(movie);
            }}
             inactiveColor = "white" 
             animationScale = {1.2}
              animationTrigger = "both"
               animationDuration = {.2} 
               fill = "white" 
               className = {`customHeart${active ? " active": ""}`}/>
        </div>
        {values.map((v, idx) => (
        <a href="#3" key={idx} className="hello-1" onClick={() => handleShow(v)}>
            <div className="movies">
            
            <img src={IMAGE_BASE_URL+movie.info.backdrop_path} alt="dd" className='poster'></img>
          </div>
            {typeof v === 'string' && `below ${v.split('-')[0]}`}
          </a>
          ))}

       
            <div className="movie-details">
              
                <div className="box">
                    <h4 className="title">{movie.info.title}</h4>
                    
                    <p className="rating">{movie.info.vote_average}</p>
                    
                    
                    
                    

                </div>
                
                <div className="overview">
                    <h1>Overview</h1>
                    <h6>Release-Date:{movie.info.release_date}</h6>
                    {movie.info.overview}
                    <div className="more-info">
            <>
      {values.map((v, idx) => (
        <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
          More-info
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
        
      
          
        
      ))}
     
      <Modal show={show}  fullscreen={fullscreen} onHide={() => setShow(false)}>
     
      
        <Modal.Header closeButton>
          <Modal.Title>{movie.info.title}</Modal.Title>
          {movie.info.video}
        </Modal.Header>
        <Modal.Body>
        


        <img src={IMAGE_BASE_URL+movie.info.backdrop_path} alt="dd" className='poster'></img>
        <h1>Overview</h1>
        <h2>Release-Date:{movie.info.release_date}</h2>
        <h2>Ratings- {movie.info.vote_average}</h2>
        <p>{movie.info.overview}</p>
        
     
               
        <div className="controls">
               
            <button className="btn"  onClick={()=>{
              
              checkFavs1(movie);
              
             
              
              
              
              }}>
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
export default Card;