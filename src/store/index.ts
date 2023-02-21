import { combineReducers, configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import { changeCost, changeName, formReducer } from "./slices/formSlice";
import {
  addCar,
  carsReducer,
  changeSearchTerm,
  removeCar,
} from "./slices/carsSlice";

const rootReducer = combineReducers({
  cars: carsReducer,
  form: formReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { store, changeCost, changeName, addCar, changeSearchTerm, removeCar };

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
