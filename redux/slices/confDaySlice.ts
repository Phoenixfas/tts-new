import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// define day state as a number
export interface Day {
    value: number;
}

// define initial state
const initialState: Day = {
    value: 1,
};

// create slice
export const confDaySlice = createSlice({
    name: "confDay",
    initialState,
    reducers: {
        // define action to change conf day

        // @ts-ignore
        changeConfDay: (state, action: PayloadAction<Day>) => {
            state.value = action.payload.value;
        },
    },
});


// export actions
export const { changeConfDay } = confDaySlice.actions;

// other code such as selectors can use the imported `RootState` type
export const selectConfDay = (state: RootState) => state.confDay;

// export reducer
export default confDaySlice.reducer;
