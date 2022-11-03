import { useContext } from "react";
import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorite-context";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, View, Text } from "react-native";

function FavoriteScreen() {
  const favoritesMealsContext = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter(meal => favoritesMealsContext.ids.includes(meal.id));
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meal yet :'(</Text>
      </View>
    );
  } else {
    return <MealsList items={favoriteMeals} />;
  }
}

export default FavoriteScreen;


const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
})
