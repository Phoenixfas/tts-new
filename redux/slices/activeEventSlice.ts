import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// define event state as an object with title, image, desc, content, and date
export interface Event {
  _id: any;
  name: string;
  image: string;
  description: string;
  location: string;
  time: string;
  date: string;
}

// define initial state
const initialState: Event = {
  _id: "",
  name: "",
  image: "",
  description: "",
  location: "",
  time: "",
  date: "",
};

// create slice
export const activeEventSlice = createSlice({
  name: "activeEvent",
  initialState,
  reducers: {
    // define action to change active event

    // @ts-ignore
    changeActiveEvent: (state, action: PayloadAction<Event>) => {
      state._id = action.payload._id;
      state.name = action.payload.name;
      state.description = action.payload.description;
      state.location = action.payload.location;
      state.time = action.payload.time;
      state.date = action.payload.date;
      state.image = action.payload.image;
    },
  },
});

// export actions
export const { changeActiveEvent } = activeEventSlice.actions;

// other code such as selectors can use the imported `RootState` type
export const selectActiveEvent = (state: RootState) => state.activeEvent;

// export reducer
export default activeEventSlice.reducer;
