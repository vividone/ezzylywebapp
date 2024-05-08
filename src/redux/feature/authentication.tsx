import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface PayloadType {
  payload: {
    data?: [] | any;
    message?: string | any;
    error?: any;
    action?: () => void;
  };
}

export interface IUserDetailsState {
  userId: string;
  userEmail: string;
}

const initialState: IUserDetailsState = {
  userId: "",
  userEmail: "",
};

export const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    setUserDetails: (state: IUserDetailsState, { payload }: PayloadType) => {
      state.userEmail = payload.data.userEmail as string;
      state.userId = payload.data.userId as string;
    },
  },
});

export const { setUserDetails } = userDetailsSlice.actions;
export const userDetailsSelector = (state: RootState) => state;
export default userDetailsSlice.reducer;
