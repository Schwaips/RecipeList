// slice : Redux feature that define state and data
// and action that change the data.

import { createSlice } from '@reduxjs/toolkit'


const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    ids: []
  },
  // fonction use to change the state.
  reducers: {
    // method got state and action as parameter
    // state is the current state,
    // action is an object that has a payload.
    // This payload will contains certainlyu an id for that case
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      // splice :
      // First parameter : locate an element at a certain index (for deletion).
      // second parameter : How many item you wanna remove.
      state.ids.splice(state.ids.indexOf(action.payload.id), 1)
    }
  }
});

// points to the method defined within favoriteSlice.
// Action is provided by redux.
export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
// we export the reducer method that will be used by the store.
export default favoritesSlice.reducer;
