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

export interface IUserEmailState {
  userEmail: string;
}

const initialState: IUserEmailState = {
  userEmail: "",
};

export const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    setUserEmail: (state: IUserEmailState, { payload }: PayloadType) => {
      state.userEmail = payload.data as string;
    },
  },
});

export const { setUserEmail } = userDetailsSlice.actions;
export const userEmailSelector = (state: RootState) => state.userEmail;
export default userDetailsSlice.reducer;
