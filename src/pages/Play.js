
import classes from './Play.module.css';
import Navigation from "../components/Navigation";
import Image from '../assets/playmusicsss.jpeg';
import { useContext, useState } from 'react';
import FavoritesContext from '../store/favorites-context';
import MusicList from '../components/Dmusics/MusicList';
import Card from '../components/UI/Card';
const Play=()=>{
const[showCard,setShowCard]=useState(false);

const onShowCardHandler=()=>{
    setShowCard(true);
}



    const favoriteCtx = useContext(FavoritesContext);

    let content;
    if(favoriteCtx.totalFavorites === 0){
        content = <p>You got no music yet?</p>
    }else{
        content = <MusicList musics={favoriteCtx.favorites}/>
    }
    return(
        <div className={classes.main}>
         <Navigation/>
   <div className={classes['main-image']}>
    <img src={Image} alt="paly osm songs"/>
    <div className={classes.text}>
<h1>PLAYS</h1>
</div>
</div>


<h1>My PLAYS</h1>

{content}


<div className={classes.button} onClick={onShowCardHandler}>
ADD MORE MUSICS
</div>



{showCard&&<Card />}

</div>





    )
}
export default Play;