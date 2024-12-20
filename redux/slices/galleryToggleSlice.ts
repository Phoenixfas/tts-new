import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface GalleryToggleState {
  value: boolean;
}

// Define the initial state using that type
const initialState: GalleryToggleState = {
  value: false,
};

export const galleryToggleSlice = createSlice({
  name: "galleryToggle",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleGallery: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleGallery } = galleryToggleSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectGalleryToggle = (state: RootState) => state.galleryToggle.value;

export default galleryToggleSlice.reducer;
