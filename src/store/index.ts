import { configureStore } from "@reduxjs/toolkit";
import { changeCost, changeName, formReducer } from "./slices/formSlice";
import {
  addCar,
  carsReducer,
  changeSearchTerm,
  removeCar,
} from "./slices/carsSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { store, changeCost, changeName, addCar, changeSearchTerm, removeCar };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
