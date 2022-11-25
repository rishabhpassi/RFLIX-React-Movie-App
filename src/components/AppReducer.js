/* eslint-disable import/no-anonymous-default-export */






export default (state , action) => {
  
 
    switch (action.type){
     
        case "ADD_MOVIE_TO_FAVOURITESLIST":
          
         
            const inFavs = state.FavouritesList.find((movie) => movie.info.id === action.payload);
            

            if (inFavs) {
              return {
                 ...state
              }
            } else {
              return {
                
                ...state,
                 FavouritesList:[action.payload, ...state.FavouritesList],
                
               
                
                
                 
                   
                 
              }
             
              
             
            }
        default:
            return state;
        case "REMOVE_MOVIE_FROM_FAVOURITESLIST":
            return {
                ...state,
                FavouritesList: state.FavouritesList.filter(
                (movie) => movie.info.id !== action.payload
                ),
                
                
            };

            
    }
}