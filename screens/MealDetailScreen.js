import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
// import { useContext } from "react";

import { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import IconButton from "../components/IconButton";
// Uncomment to use context instead of redux
// import { FavoritesContext } from "../store/context/favorite-context";
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from "../store/redux/favorites";

import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

function MealDetailScreen({ route, navigation }) {

  // Uncomment if you use context
  // const favoriteMealsContext = useContext(FavoritesContext);


  // to get data from our redux store.
  // state is provided by react redux when executing the function
  // state.favoriteMeal will drill in redux slice.
  // useSelector will read data after actions.
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  console.log(favoriteMealIds);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  // we check whether the meal is included in the array of favorite meal.
  // Uncomment to use context.
  // const mealIsFavorite = favoriteMealsContext.ids.includes(mealId)

  // comment if you use context.
  const mealIsFavorite = favoriteMealIds.includes(mealId);

  const changeFavoriteStatusHandler = () => {
    console.log("Hey you pressed");
    if(mealIsFavorite) {
      // Uncomment if you use context
      // favoriteMealsContext.removeFavorite(mealId)
      // dispatch will use action from slices.
      dispatch(removeFavorite({id: mealId}))
    } else {
      // favoriteMealsContext.addFavorite(mealId)
       dispatch(addFavorite({id: mealId}))
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavoriteStatusHandler}
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
          />
        );
      },
      title: selectedMeal.title,
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        textStyle={styles.detailText}
      />

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
