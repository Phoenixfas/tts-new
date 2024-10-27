import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// define blog state as an object with title, image, desc, content, and date

export interface Speaker {
    _id: string;
    // speaker
    first_name: string;
    last_name: string;
    company_name: string;
    email: string;
    job_title: string;
    profile_pic: string;
    type: string;
    // partner
    name: string;
    logo: string;
    url: string;
    description: string;
    // both
    created_at?: string;
    updated_at?: string;
}

// define initial state
const initialState: Speaker = {
    _id: "",
    first_name: "",
    last_name: "",
    company_name: "",
    email: "",
    job_title: "",
    profile_pic: "",
    type: "",
    name: "",
    logo: "",
    url: "",
    description: "",
    created_at: "",
    updated_at: "",
};

// create slice
export const activeSpeakerSlice = createSlice({
    name: "activeSpeaker",
    initialState,
    reducers: {
        // define action to change active blog

        // @ts-ignore
        changeActiveSpeaker: (state, action: PayloadAction<Speaker>) => {
            state._id = action.payload._id;
            state.first_name = action.payload.first_name;
            state.last_name = action.payload.last_name;
            state.company_name = action.payload.company_name;
            state.email = action.payload.email;
            state.job_title = action.payload.job_title;
            state.profile_pic = action.payload.profile_pic;
            state.type = action.payload.type;
            state.name = action.payload.name;
            state.logo = action.payload.logo;
            state.url = action.payload.url;
            state.description = action.payload.description;
            state.created_at = action.payload.created_at;
            state.updated_at = action.payload.updated_at;
        },
    },
});


// export actions
export const { changeActiveSpeaker } = activeSpeakerSlice.actions;

// other code such as selectors can use the imported `RootState` type
export const selectActiveSpeaker = (state: RootState) => state.activeSpeaker;

// export reducer
export default activeSpeakerSlice.reducer;
