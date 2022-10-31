import { FlatList, StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

// route props if register as a screen
function MealsOverviewScreen({ route }) {
  // route.params : Object that contains params passed in category screens
  const catId = route.params.categoryId;

  // filter meal that match the corresponding category
  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  // you can use this hook as alternative to route.params for not registered screen.
  // const route = useRoute();

  const renderMealItem = (itemData) => {
    const item = itemData.item
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability
    }

    return (
      <MealItem
      // pass mealItemProps object defined above as props
        {...mealItemProps}
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
