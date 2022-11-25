import React, { useState } from "react";
import Card from "../components/Card";


export const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=2c2fd8081560b42cbc58912cedecee23&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          
          setResults(data.results);
        } else {
          setResults([]);

        }
      });
  };

  return (
    
    <div className="add-page">
     
      
      <div className="container">
        <div className="add-content">
          
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            />
          </div>

          {results.length > 0 ? (
            <ul className="results">
              {results.map((res,pos) => (
                
                
                   <Card info={res} key={pos}/>
               
              ))}
            </ul>
          ): (
            <div>
            <h2 className="no-movies"> Search Some Movies!!</h2>
            </div>
          )}
           
        </div>
      </div>
    </div>
  );
};