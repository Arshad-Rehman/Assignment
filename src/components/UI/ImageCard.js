import classes from './ImageCard.module.css';
const ImageCard = (props) =>{
return(
    <div>
        <div className={classes.horizontal}>
<div className={classes.slider}>
<div className={classes.item}>
    {props.children}
    </div>
    </div>
</div>
    </div>
)
}
export default ImageCard;