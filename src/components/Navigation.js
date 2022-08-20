import { Link } from "react-router-dom";
import './Navigation.css';
import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
const Navigation=()=>{
const favoriteCtx=  useContext(FavoritesContext);
return(
<div>
<div class="sidebar">
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <ul >
      <li>
          <Link to="/">
          <i className="fas fa-bars"></i>
            <span>Home</span>
          </Link>
        </li>
     
        <li>
          <Link to="/new-Search">
          <i className="fas fa-search "></i>
            <span>Search</span>
          </Link>
        </li>
        <li>
          <Link to="/favorites">
          <i className="fas fa-heart nav-link-icon"></i>
            <span>Favourite{favoriteCtx.totalFavorites}</span>
           
          </Link>
        </li>
       
        <li>
          <Link to="/play">
          <i className="fas fa-play "></i>
            <span className="badge">Play</span>
          </Link>
        </li>
      </ul>
    </div>



</div>

)
}
export default Navigation;