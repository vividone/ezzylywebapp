import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { userDetailsSlice } from "./feature/authentication";
import { userOnboardSlice } from "./feature/onboardAuth";
import { userClassIdSlice } from "./feature/classManagement";
// import { applicationsReducer, userReducer } from "./features";

export const store = configureStore({
  reducer: {
    userEmail: userDetailsSlice.reducer,
    userOnboard: userOnboardSlice.reducer,
    userClassId: userClassIdSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
