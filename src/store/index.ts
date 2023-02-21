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
