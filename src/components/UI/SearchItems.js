// import classes from'./SearchItems.module.css';
const SearchItems = (props)=>{
return(
    <div>
        <img src={props.image} alt={props.title}/>
  <h2>{props.title}</h2>
    </div>
)
}
export default SearchItems;