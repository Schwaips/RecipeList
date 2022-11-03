import { useContext } from "react";
import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorite-context";
import { MEALS } from "../data/dummy-data";

function FavoriteScreen() {
  const favoritesMealsContext = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter(meal => favoritesMealsContext.ids.includes(meal.id));

  return <MealsList items={favoriteMeals} />;
}

export default FavoriteScreen;
