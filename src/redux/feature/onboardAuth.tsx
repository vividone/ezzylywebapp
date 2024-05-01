import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface PayloadType {
  payload: {
    data?: [] | any;
    message?: string | any;
    error?: any;
    action?: () => void;
  };
}

export interface IUserOnboardState {
  userOnboard: string;
}

const initialState: IUserOnboardState = {
  userOnboard: "",
};

export const userOnboardSlice = createSlice({
  name: "userOnboards",
  initialState,
  reducers: {
    setUserOnboard: (
      state: IUserOnboardState,
      { payload }: PayloadAction<string>
    ) => {
      state.userOnboard = payload;
    },
  },
});

export const { setUserOnboard } = userOnboardSlice.actions;
export const userOnboardSelector = (state: RootState) => state.userOnboard;

export default userOnboardSlice.reducer;
