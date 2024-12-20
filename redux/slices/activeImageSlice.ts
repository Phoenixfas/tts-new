import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// define image state as an object with title, src, desc, content, and date
export interface Image {
    id: any;
    title: string;
    src: string;
}

// define initial state
const initialState: Image = {
    id: "",
    title: "",
    src: "",
};

// create slice
export const activeImageSlice = createSlice({
    name: "activeImage",
    initialState,
    reducers: {
        // define action to change active image

        // @ts-ignore
        changeActiveImage: (state, action: PayloadAction<Image>) => {
            state.id = action.payload.id;
            state.title = action.payload.title;
            state.src = action.payload.src;
        },
    },
});


// export actions
export const { changeActiveImage } = activeImageSlice.actions;

// other code such as selectors can use the imported `RootState` type
export const selectActiveImage = (state: RootState) => state.activeImage;

// export reducer
export default activeImageSlice.reducer;
