import classes from './Card.module.css';
import MusicList from '../Dmusics/MusicList';
import { useState,useEffect } from 'react';
const Card = (props)=>{
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
    <div className={classes.card}>
      

    <h1>ADD MORE MUSICS</h1>
<div className={classes['horizontal-line']} />

<MusicList musics={playmucic}/>



<MusicList musics={playmucic}/>

  
  </div>

)
}
export default Card;