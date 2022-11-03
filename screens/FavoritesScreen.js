// Uncomment if you use context
// import { useContext } from "react";
// import { FavoritesContext } from "../store/context/favorite-context";

import { useSelector } from 'react-redux';
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, View, Text } from "react-native";

function FavoriteScreen() {
  // Uncomment if you use context instead of redux
  // const favoritesMealsContext = useContext(FavoritesContext);

  const favoriteMealIds = useSelector(state => state.favoriteMeals.ids)


  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );
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
