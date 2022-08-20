import Navigation from "../components/Navigation";
import classes from './Favourites.module.css';
import Image from '../assets/playmusicsss.jpeg';
import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MusicList from "../components/Dmusics/MusicList";
function Favourite (){
    const favoriteCtx = useContext(FavoritesContext);

let content;
if(favoriteCtx.totalFavorites === 0){
    content = <p>You got no favorites yet.Start adding some ?</p>
}else{
    content = <MusicList musics={favoriteCtx.favorites}/>
}



    return(
       
    <div className={classes.main}>
         <Navigation/>
   <div className={classes['main-image']}>
    <img src={Image} alt="paly osm songs"/>
    <div className={classes.text}>
<h1>Favourite tunes</h1>
</div>
</div>


<h1>My favorites</h1>

{content}

</div>
)
}

export default Favourite;