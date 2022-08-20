import Navigation from "../components/Navigation";
import classes from  './Homepage.module.css';

import Images from '../assets/Play.jpeg';
import MusicList from "../components/Dmusics/MusicList";
import { useState,useEffect } from "react";


function HomePage (){
const[playmucic,setplaymusic]=useState([]);

useEffect(()=>{
  fetch(`https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?id=${"40008598"}&locale=${"en-US"}`,{
    method:"GET",
      headers: {
        'X-RapidAPI-Key': '401e18f629msh0d62a7275d50dfbp1c3332jsn0c143e67513b',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
      }
    
  }).then((res)=>res.json())
  .then((data)=>{
    console.log(data)
    const transformData = data.tracks.map(musicData=>{
      return{
                id:musicData.key,
                title:musicData.title,
                image:musicData.images.background
              }
    });
    console.log(transformData);
    setplaymusic(transformData);
  }



  )},[])


return(
  <div className={classes.main}>
   <Navigation/>
   <div className={classes['main-image']}>
    <img src={Images} alt="paly osm songs"/>
    <div className={classes.text}>
<h1>Your favourite tunes</h1>
<h2>All<i className="fas fa-sun day" />and all <i className="fas fa-moon night"/></h2>
    </div>
    </div>

    <h1>RELEASE THIS WEEK</h1>
<div className={classes['horizontal-line']} />

<MusicList musics={playmucic}/>


 
<h1>FEATURED PLAYLIST</h1>
<div className={classes['horizontal-line']} />

<MusicList musics={playmucic}/>

  
  </div>
)
}

export default HomePage;