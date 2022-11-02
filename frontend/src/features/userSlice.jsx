import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userDetails: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { userDetails } = userSlice.actions;
export default userSlice.reducer;
