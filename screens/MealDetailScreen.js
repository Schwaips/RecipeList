import { Text } from "react-native";
import { MEALS } from "../data/dummy-data";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId
  const mealItem = MEALS.find((meal) => meal.id === mealId);

  return <Text>Hello {mealItem.title}</Text>;
}

export default MealDetailScreen;
