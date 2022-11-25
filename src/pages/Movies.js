import { POPULAR_BASE_URL} from '../API';
import { useState } from 'react';
import { useEffect } from 'react';
import Filter from "../components/Filter";
import "../styles/Movies.css";
import Card from '../components/Card';






export default function Movies() {
  
const [popular, setPopular] = useState([]);

const [filtered, setFiltered] = useState([]); 
  const [activeGenre, setActiveGenre] = useState(0);
  

useEffect(() => {
  fetchPopular();
}, []);

const fetchPopular = async () => {
  const data1 = await fetch(POPULAR_BASE_URL);
  const movies = await data1.json();
  
 
  setPopular(movies.results);
  setFiltered(movies.results);
};


    return (
    <>
      <div className="App">
      <h1>Movies</h1>
      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
      <div className="popular-movies">
        {filtered.map((res,pos) => {
          return(
          
            <Card info={res} key={pos}/>
         
          

        )})}
        
       
      </div>
    </div>
  
    </>
            
    )

  }