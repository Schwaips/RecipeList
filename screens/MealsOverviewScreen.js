import { useEffect, useLayoutEffect } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

// route props if register as a screen
function MealsOverviewScreen({ route, navigation }) {
  // route.params : Object that contains params passed in category screens
  const catId = route.params.categoryId;

  // filter meal that match the corresponding category
  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  // you can use this hook as alternative to route.params for not registered screen.
  // const route = useRoute();

  // TODO : Why use effect here ?
  // Execute simultaneously
  useLayoutEffect(() => {
    // We find the title for the categorie id we have
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    // We set the options title for the navigation header to the categoryTitle defined above
    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  // // Execute after the component function was exectued the first time.
  // So the title will be updated once the component is done. Not so beautiful
  // on screen, use useLayoutEffect instead :)
  // useEffect(() => {
  //   // We find the title for the categorie id we have
  //   const categoryTitle = CATEGORIES.find(
  //     (category) => category.id === catId
  //   ).title;
  //   // We set the options title for the navigation header to the categoryTitle defined above
  //   navigation.setOptions({ title: categoryTitle });
  // }, [catId, navigation]);

  const renderMealItem = (itemData) => {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    // const pressHandler = () => {
    //   navigation.navigate("MealDetail", {
    //     mealId: itemData.item.id,

    //   });
    // }

    return (
      <MealItem
        // pass mealItemProps object defined above as props
        {...mealItemProps}
        // onPress={pressHandler}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => {
          item.id;
        }}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
});
