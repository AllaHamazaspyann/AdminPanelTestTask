import { SetUsers, SetError } from "./reducer";
import FetchApi from '../../../helpers/fetchAPI';


export const getAllUsers = (page) => async dispatch => {
  try {
    const response = await FetchApi.get(`https://brainstorm-interview-task.herokuapp.com/users?_page=${page}&_limit=10`);
    dispatch(SetUsers(response))
  } catch(e) {
      dispatch(SetError(e))
  }
}

export const deleteUser = (userId) => async dispatch => {
  try{
    const response = await FetchApi.delete(`https://brainstorm-interview-task.herokuapp.com/users/${userId}`);
    window.location.reload();
  }catch (e){
    dispatch(SetError(e))
  }
}



