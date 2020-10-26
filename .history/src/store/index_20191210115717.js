import { combineReducers } from 'redux';

import { registration } from '../components/pages/Registration/reducer';
import { profile } from '../components/pages/Profile/reducer';
import { login } from '../components/pages/Login/reducer';
import { articles } from '../../';

export default combineReducers ({
  registration,
  login,
  profile,
  articles
})