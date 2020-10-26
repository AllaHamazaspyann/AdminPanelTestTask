import { combineReducers } from 'redux';
import allUsersState from '../components/Containers/AllUsers/reducer';
import editUserState from '../components/Containers/EditUser/reducer';
import addUserState from '../components/Containers/AddUser/reducer';

export default combineReducers ({
  allUsersState,
  editUserState,
  addUserState
})