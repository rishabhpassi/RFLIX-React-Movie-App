/* eslint-disable jsx-a11y/anchor-is-valid */
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import { useEffect } from 'react';

import Banner from '../components/banner';
import "../styles/Home.css";
import { NOW_PLAYING_URL,TOP_RATED_URL,POPULAR_BASE_URL,UPCOMMING_URL } from '../API';
import Card from '../components/Card';



function Home() {
  const url =
  "https://api.themoviedb.org/3/movie/popular?api_key=2c2fd8081560b42cbc58912cedecee23&language=en-US&page=1";
const [popular, setPopular] = useState([]);
useEffect(() => {
  fetchPopular();
}, []);
const fetchPopular = async () => {
  const data = await fetch(url);
  const movies = await data.json();
  
 
  setPopular(movies.results);
};
let URLs = POPULAR_BASE_URL;

const [movieData,setData] = useState([]);
const [url_set , setUrl] = useState([URLs]);
let heading = "";
const [head , sethead] = useState(heading);

useEffect(()=> {
  fetch(url_set).then(res=>res.json()).then(data=>{
   
    setData(data.results)
  })
},[url_set])
let arr = ["Popular","Top-Rated","Upcoming","Now-Playing"]
const getData = (movieType) =>{
  if(movieType === "Popular"){
    
   heading = "POPULAR"
    URLs =  POPULAR_BASE_URL;
  }
  if(movieType === "Top-Rated"){
    URLs =  TOP_RATED_URL;
    heading = "Top Rated"
  }
  if(movieType === "Upcoming"){
    URLs =  UPCOMMING_URL;
    heading = "UPCOMING MOVIES"

  }
  if(movieType === "Now-Playing"){
    URLs =  NOW_PLAYING_URL;
    heading = "Now-Playing"
  }
  setUrl(URLs);
  sethead(heading)

  
} 
  return (
    <>
   <h1 style={{color:'white'}}>	
&#127871; MovieTime 	
&#127871;</h1>
    
      <div className="popular-movies">
       
        <Carousel >

          {popular.map((movie) => {
            return (
              <Carousel.Item>
                
              <Banner key={movie.id} movie={movie} /> 
           
              
              </Carousel.Item>

            )    
          })}
          
          
        </Carousel>
      </div>
      <div className='movie-selector'>
       
          <table>
          
            {
              arr.map((value)=>{
              
                return(
                  <>
                  
                
                <td>
                  
                  
                  <a href= "#" name={value} onClick={(e)=>getData(e.target.name)}>{value}</a>
                  
                  
                </td>
                </>
                )

              })

            }
          
            
            
            
            
          </table>
        </div>  
        <div className='title-movie'>
        {head}
        </div>

      
      <div className='main-page-movies'>
        {
          (movieData.length === 0)?<p>Not Found</p>:movieData.map( (res,pos) => {
            return(
             
             
        
              
             

              <Card info={res} key={pos}/>
              
              
            )

          
          })
        }
      </div>


      </>
      

      

      
      
  );
}

export default Home;