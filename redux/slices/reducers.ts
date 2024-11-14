import { combineReducers } from "@reduxjs/toolkit";
import blogModalToggleReducer from "./cliBlogModalToggleSlice";
import blogAddModalToggleReducer from "./blogAddModalToggleSlice";
import activeBlogReducer from "./activeBlogSlice";
import sortBlogsReducer from "./sortBlogsSlice";
import loginReducer from "../auth/loginSlice";
import activePackageReducer from "./activePackageSlice";
import activeEventReducer from "./activeEventSlice";
import activeWithdrawalReducer from "./activeWithdrawalSlice";
import activeUserReducer from "./activeUserSlice";
import purchaseTypeReducer from "./purchaseTypeSlice";
import activePurchaseReducer from "./activePurchaseSlice";
import purchaseStatusReducer from "./purchaseStatusSlice";
import activeProviderReducer from "./activeProviderSlice";
import activeRegReducer from "./activeRegSlice";
import activeVendorReducer from "./activeVendorSlice";
import regModalToggleReducer from "./regModalToggleSlice";
import activeSpeakerReducer from "./activeSpeakerSlice";
import cliblogModalToggleReducer from "./cliBlogModalToggleSlice";
import activeExhibitorReducer from "./activeExhibitorSlice";
import activeProfileReducer from "./activeProfileSlice";

export const rootReducer = combineReducers({
  blogModalToggle: blogModalToggleReducer,
  blogAddModalToggle: blogAddModalToggleReducer,
  activeBlog: activeBlogReducer,
  sortBlogs: sortBlogsReducer,
  login: loginReducer,
  activePackage: activePackageReducer,
  activeEvent: activeEventReducer,
  activeWithdrawal: activeWithdrawalReducer,
  activeUser: activeUserReducer,
  purchaseType: purchaseTypeReducer,
  activePurchase: activePurchaseReducer,
  purchaseStatus: purchaseStatusReducer,
  activeProvider: activeProviderReducer,
  activeReg: activeRegReducer,
  activeVendor: activeVendorReducer,
  regModalToggle: regModalToggleReducer,
  activeSpeaker: activeSpeakerReducer,
  cliblogModalToggle: cliblogModalToggleReducer,
  activeExhibitor: activeExhibitorReducer,
  activeProfile: activeProfileReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
