import { combineReducers } from 'redux';

import { registration } from '../components/pages/Registration/reducer';
import { profile } from '../components/pages/Profile/reducer';
import { login } from '../components/pages/Login/reducer';
import { formArticle } from '../components/pages/BlogsForm'

export default combineReducers ({
  registration,
  login,
  profile,
})