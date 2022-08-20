import { useState,useEffect} from 'react';
import classes from './Search.module.css';
import Navigation from '../components/Navigation';
import SearchBar from '../components/UI/SearchBar';
import SearchList from '../components/UI/SearchList';
const  Search= (props)=>{
    const[playmucic,setplaymusic]=useState([]);
const[query,setQuery]=useState("");

const search = (data)=>{
  return data.filter(item=>item.title.toLowerCase().includes(query));
}





    useEffect(()=>{
     
            fetch(`https://shazam.p.rapidapi.com/search?term=${'kiss the rain'}&locale=${'en-US'}&offset=${'0'}&limit=${'5'}`,{  
        method:"GET",
              headers: {
                'X-RapidAPI-Key': '401e18f629msh0d62a7275d50dfbp1c3332jsn0c143e67513b',
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
              }
            
          }).then((res)=>res.json())
          .then((data)=>{
            console.log(data);
      const transformitems = data.tracks.hits.map((MusicData)=>{
return {
    id:MusicData.track.key,
    title:MusicData.track.title,
    image:MusicData.track.images.background
}
      });
      console.log(transformitems);
      setplaymusic(transformitems);
          }
         )},[])




    return<div >
         <Navigation/>
   <SearchBar />

   <div className={classes.main}>
   <div className={classes['search-input']}>
<input type="text" 
placeholder="search...." 
onChange={(e)=>{setQuery(e.target.value)}}/>
</div>

<div className={classes['horizontal-line']} />

{/* <MusicList musics={playmucic}/> */}
<SearchList Searchmusics={search(playmucic)}/>
  
  </div>



   </div>

   
   
}

export default Search;