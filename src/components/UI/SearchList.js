import SearchItems from "./SearchItems";
import ImageCard from "./ImageCard"; 
function SearchList(props){
return(
    <ImageCard>
  {props.Searchmusics.map((music)=>(<SearchItems
  key={music.id}
  id={music.id}
  title={music.title}
  image={music.image}
  />
  ))}  
</ImageCard>
)
}
export default SearchList;