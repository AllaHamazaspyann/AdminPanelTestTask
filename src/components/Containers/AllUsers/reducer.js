import { createSlice } from "@reduxjs/toolkit";

const Users = createSlice({
  name: "Users",
  initialState: {
    allUsers: [],
    success: '',
  },
  reducers: {
    SetUsers(state, action) {
      state.allUsers = action.payload;
    },
    SetSuccessMessage(state, action){
      state.success = action.payload
    },
    SetError(state, action){
      state.error = action.payload
    }
  }
})

export const {
  SetUsers,
  SetError,
  SetSuccessMessage
} = Users.actions

export default Users.reducer