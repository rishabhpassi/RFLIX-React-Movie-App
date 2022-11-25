import Navbar from "./Navbar";
import Favourites from "./pages/Favourites";
import Movies from "./pages/Movies";
import "./styles/app.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes} from "react-router-dom";
import { GlobalProvider } from "./components/GlobalState";
import { Add } from "./pages/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fotter } from "./components/Fotter";



function App() {
  return (
    <GlobalProvider>
    <>
      <Navbar />
      <div className="container">
      <FontAwesomeIcon icon="check-square" />

        <Routes >
        
        <Route path="/Add" element={<Add />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Favourites" element={<Favourites />} />
          <Route path="/Movies" element={<Movies />} />

        </Routes>
        
      </div>
     
      
    </>
    <footer>
     <Fotter/>
        </footer>
   
    </GlobalProvider>
    
  )
  
}


export default App
