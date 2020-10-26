import { createSlice } from "@reduxjs/toolkit";

const AddUserState = createSlice({
  name: "AddUsers",
  initialState: {
    singleUser: {},
  },
  reducers: {
    HandleChange(state, action) {
      state.singleUser = {
        ...state.singleUser,
        [action.payload.name]: action.payload.value
      }
    },
  }
})

export const {
  HandleChange
} = AddUserState.actions

export default AddUserState.reducer