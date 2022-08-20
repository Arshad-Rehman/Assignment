import { useContext } from 'react';
import classes from './SongsItems.module.css';
import FavoritesContext from '../../store/favorites-context';
const SongsItems=(props)=>{
const favoritesCtx=  useContext(FavoritesContext);
const itemIsFavorites = favoritesCtx.itemIsFavorites(props.id);

const toggleFavoritesHandler=()=>{
if(itemIsFavorites){
  favoritesCtx.removeFavorite(props.id);
}else{
  favoritesCtx.addFavorites({
id: props.id,
title: props.title,
image:props.image
  })
}

  }
    return(
        <div>
<img src={props.image} alt={props.title}/>
  <h2>{props.title}
 <div className={ classes.icon}></div>
  <button onClick={toggleFavoritesHandler}>{itemIsFavorites ? <i className="fas fa-heart fas-red"/> :'+'}</button>
</h2>

<div>

</div>

  </div>
    )
}
export default SongsItems;