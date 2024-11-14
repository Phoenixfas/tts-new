import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// define Exhibitor state as an object with title, image, desc, content, and date
export interface Product {
    _id: any;
    name: string;
    image: string;
}
export interface Exhibitor {
    _id: string;
    first_name: string;
    last_name: string;
    company_name: string;
    company_website: string;
    email: string;
    job_title: string;
    country: string;
    region: string;
    phone: string;
    title: string;
    logo: string;
    description: string;
    sectors: string[];
    vendor_loc: string;
    products: Product[];
    videos: string[];
    approved: boolean;
    goal: string;
    type: string;
    createdAt: string;
    updatedAt: string;
}

// define initial state
const initialState: Exhibitor = {
    _id: "",
    first_name: "",
    last_name: "",
    company_name: "",
    company_website: "",
    email: "",
    job_title: "",
    country: "",
    region: "",
    phone: "",
    title: "",
    logo: "",
    description: "",
    sectors: [],
    vendor_loc: "",
    products: [],
    videos: [],
    approved: false,
    goal: "",
    type: "",
    createdAt: "",
    updatedAt: "",
};

// create slice
export const activeExhibitorSlice = createSlice({
    name: "activeExhibitor",
    initialState,
    reducers: {
        // define action to change active Exhibitor

        // @ts-ignore
        changeActiveExhibitor: (state, action: PayloadAction<Exhibitor>) => {
            state._id = action.payload._id;
            state.first_name = action.payload.first_name;
            state.last_name = action.payload.last_name;
            state.company_name = action.payload.company_name;
            state.company_website = action.payload.company_website;
            state.email = action.payload.email;
            state.job_title = action.payload.job_title;
            state.country = action.payload.country;
            state.region = action.payload.region;
            state.phone = action.payload.phone;
            state.title = action.payload.title;
            state.logo = action.payload.logo;
            state.description = action.payload.description;
            state.sectors = action.payload.sectors;
            state.vendor_loc = action.payload.vendor_loc;
            state.products = action.payload.products;
            state.videos = action.payload.videos;
            state.approved = action.payload.approved;
            state.createdAt = action.payload.createdAt;
            state.updatedAt = action.payload.updatedAt;
            state.goal = action.payload.goal;
            state.type = action.payload.type;
        },
    },
});


// export actions
export const { changeActiveExhibitor } = activeExhibitorSlice.actions;

// other code such as selectors can use the imported `RootState` type
export const selectActiveExhibitor = (state: RootState) => state.activeExhibitor;

// export reducer
export default activeExhibitorSlice.reducer;
