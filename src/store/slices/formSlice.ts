import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { addCar } from "./carsSlice";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {
    changeCost(state, action: PayloadAction<number>) {
      state.cost = action.payload;
    },
    changeName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addCar, (state) => {
      state.name = "";
      state.cost = 0;
    });
  },
});

export const { changeCost, changeName } = formSlice.actions;
export const formReducer = formSlice.reducer;
