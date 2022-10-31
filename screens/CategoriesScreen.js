import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";


function renderCategoryItem() {
  return 
}

function CategoriesScreen() {


  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default CategoriesScreen;
