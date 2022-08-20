import Images from '../Images/playmusicsss.jpeg';
import classes from './SearchBar.module.css';
const SearchBar = (props) =>{




return(
    <div className={classes.main}>
         <div className={classes['main-image']}>
    <img src={Images} alt="paly osm songs"/>
    <div className={classes.text}>
<h1>Search your favourite tunes</h1>



    </div>
    </div>
    <h3>ALL TUNES</h3>
    </div>
)
}
export default SearchBar;