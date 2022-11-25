import ReactLogo from '../images/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg';
import "../styles/about.css";

export default function About() {
  return(
  <>
   <h1>About</h1>
   <div className='details'>
  <p>This App is designed to make movies database . Here you could see and browse through latest movies. Made with the help of TMBD.</p>
  <br /><i>"This product uses the TMDB API but is not endorsed or certified by TMDB."</i><br />
  <img className='logo-tmdb' src={ReactLogo} alt="React Logo" />
  </div>
 
  </>
  )
}
