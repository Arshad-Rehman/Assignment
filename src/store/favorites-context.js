import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites:[],
    totalFavorites:0,
    addFavorites:(favoriteMusic)=>{},
    removeFavorite:(musicId)=>{},
    itemIsFavorites:(musicId)=>{}
});

export function FavoritesContextProvider(props){
const [userFavorites,setUserFavorites]=useState([]);

function addFavoritesHandler(favoriteMusic){
setUserFavorites((preUserFavorites)=>{
    return preUserFavorites.concat(favoriteMusic);
});
}
function removeFavoritesHandler(musicId){
setUserFavorites(preUserFavorites=>{
    return preUserFavorites.filter(musicup=>musicup.id !== musicId)
})    
}
function itemIsFavoritesHandler(musicId){
  return userFavorites.some(musicup=>musicup.id === musicId);
}



    const context ={
favorites:userFavorites,
totalFavorites:userFavorites.length,
addFavorites: addFavoritesHandler,
removeFavorite: removeFavoritesHandler,
itemIsFavorites: itemIsFavoritesHandler
    };

    return<FavoritesContext.Provider value={context}>
{props.children}
    </FavoritesContext.Provider>
}
export default FavoritesContext;