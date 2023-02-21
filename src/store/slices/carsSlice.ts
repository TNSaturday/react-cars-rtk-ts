import { createSlice, nanoid } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

type AddCarPayload = {
  cost: number;
  name: string;
};

type Car = AddCarPayload & { id: string };

type CarSliceState = {
  cars: Car[];
  searchTerm: string;
};

const initialState: CarSliceState = {
  cars: [],
  searchTerm: "",
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    addCar(state, action: PayloadAction<AddCarPayload>) {
      state.cars.push({
        ...action.payload,
        id: nanoid(),
      });
    },
    changeSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    removeCar(state, action: PayloadAction<string>) {
      state.cars = state.cars.filter((car) => car.id !== action.payload);
    },
  },
});

export const { addCar, changeSearchTerm, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
