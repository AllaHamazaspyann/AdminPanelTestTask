import { createSlice } from "@reduxjs/toolkit";

const EditUser = createSlice({
    name: "Users",
    initialState: {
        allUsers: [],
        singleUser: {}
    },
    reducers: {
        HandleChange(state, action) {
            state.singleUser = {
                ...state.singleUser,
                [action.payload.name]: action.payload.value
            }
        },
        SetSingleUser(state,action) {
            state.singleUser = action.payload
        }
    }
})

export const { HandleChange, SetSingleUser } = EditUser.actions

export default EditUser.reducer