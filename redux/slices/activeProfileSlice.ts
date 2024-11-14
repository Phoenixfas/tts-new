import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";


export interface Profile {
    id: string;
    name: string;
    image: string;
    list: string[];
    createdAt: string;
    updatedAt: string;
}

// define initial state
const initialState: Profile = {
    id: "",
    name: "",
    image: "",
    list: [],
    createdAt: "",
    updatedAt: "",
};

// create slice
export const activeProfileSlice = createSlice({
    name: "activeProfile",
    initialState,
    reducers: {
        // define action to change active Profile

        // @ts-ignore
        changeActiveProfile: (state, action: PayloadAction<Profile>) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.image = action.payload.image;
            state.list = action.payload.list;
            state.createdAt = action.payload.createdAt;
            state.updatedAt = action.payload.updatedAt;
        },
    },
});


// export actions
export const { changeActiveProfile } = activeProfileSlice.actions;

// other code such as selectors can use the imported `RootState` type
export const selectActiveProfile = (state: RootState) => state.activeProfile;

// export reducer
export default activeProfileSlice.reducer;
