import SongsItems from "../UI/SongsItems";
import classes from './Dmusics.module.css';
import ImageCard from "../UI/ImageCard";
function MusicList(props){
return<ImageCard className={classes.list}>
  {props.musics.map((music)=>(<SongsItems 
  key={music.id}
  id={music.id}
  title={music.title}
  image={music.image}
  />
  ))}  
</ImageCard>
}

export default MusicList;