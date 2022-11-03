import { configureStore } from "@reduxjs/toolkit";

import favoriteReducer from './favorites';


export const store = configureStore({
  // different slices of state (data)
  // and action that can change that data.
  // That are use by redux to construct an overall store of data and action
  reducer: {
    // to tap within the state of favorites.
    favoriteMeals: favoriteReducer
  },
});

