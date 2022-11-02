import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// you could put it in a new file.
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        // background for the header
        headerStyle: { backgroundColor: "#351401" },
        // font color of the header
        headerTintColor: "white",
        // set various properties. here for the page content.
        // Note that it is sceneContainerStyle and not contentStyle in this navigator type.
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{ title: "All Categories" }}
      />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        {/* // props screen options for default properties for all screens. */}
        <Stack.Navigator
          screenOptions={{
            // background for the header
            headerStyle: { backgroundColor: "#351401" },
            // font color of the header
            headerTintColor: "white",
            // set various properties. here for the page content.
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              // // title for the header
              // title: "All categories",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}

            // options={({route, navigation}) => {
            //   const catId = route.params.categoryId;
            //   // should return an object like options;
            //   return {
            //     headerTitle: catId,
            //   };
            // }}
          />

          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            // can work, but only if onPress doesn't interact with component visible.
            // If needs to interact, you need the useLayoutEffect in the component,
            // options={{
            //   headerRight: () => {
            //     return <Button title="Tap me" onPress={} />;
            //   },
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
