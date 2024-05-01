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

export interface IUserClassIdState {
  userClassId: string;
}

const initialState: IUserClassIdState = {
  userClassId: "",
};

export const userClassIdSlice = createSlice({
  name: "userClassId",
  initialState,
  reducers: {
    setUserClassId: (
      state: IUserClassIdState,
      { payload }: PayloadAction<string>
    ) => {
      state.userClassId = payload;
    },
  },
});

export const { setUserClassId } = userClassIdSlice.actions;
export const userClassIdSelector = (state: RootState) => state.userClassId;

export default userClassIdSlice.reducer;
