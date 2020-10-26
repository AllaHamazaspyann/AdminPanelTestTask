import { HandleChange, SetSingleUser } from "./reducer"
import { SetError, SetSuccessMessage } from "../AllUsers/reducer";
import FetchApi from '../../../helpers/fetchAPI';

export const setSingleUser = (singleUser) => async dispatch => {
    dispatch(SetSingleUser(singleUser))
}

export const handleChange = (e, name) => async dispatch => {
    dispatch(HandleChange({name: name, value: e.target.value}))
}

export const editSingleUser = (userId, singleUser) => async dispatch => {
    try{
       await FetchApi.put(`https://brainstorm-interview-task.herokuapp.com/users/${userId}`, {
        name: singleUser.name,
        email: singleUser.email,
        location: singleUser.location,
      });
      dispatch(SetSuccessMessage("You have Successfully edited user"))
    }catch(e){
      dispatch(SetError(e))
    }
  }