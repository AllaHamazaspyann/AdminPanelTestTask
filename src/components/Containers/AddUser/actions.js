import FetchApi from '../../../helpers/fetchAPI';
import {SetSuccessMessage} from "../AllUsers/reducer";

export const handleChange = (e, name) =>  {
  return {
      type: 'HANDLE_NEW_USER_CHANGE',
      data: e.target.value,
      name,
  }
}


export const addUser = (singleUser) => async dispatch => {
    try{
      await FetchApi.post('https://brainstorm-interview-task.herokuapp.com/users', {
        name: singleUser.name,
        email: singleUser.email,
        location: singleUser.location,
      });
      dispatch(SetSuccessMessage("You have Successfully added user"))
    }catch(e){
      console.log(e.message);
    }
  }