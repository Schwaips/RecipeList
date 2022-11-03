import { createContext, useState } from "react";


export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {}
});


function FavoritesContextProvider({children}) {
  const [FavoriteMealIds, setFavoriteMealIds] = useState([]);

  const addFavorite = (id) => {
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id])
  }

  const removeFavorite = (id) => {
    // will filter out the meal id if id matchs the one we want to remove.
    setFavoriteMealIds((currentFavIds) => currentFavIds.filter(mealId => mealId !== id));
  }

  const value = {
    ids: FavoriteMealIds,
    // thank to the below key, we will be able to exectute the add afovrite direaction from value.
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  }

  // later wraps other components that will intereact with this context.
  // value referes to the constant defined line 23
  return <FavoritesContext.Provider value={value} >{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;
