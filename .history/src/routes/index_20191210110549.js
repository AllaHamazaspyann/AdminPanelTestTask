import React from 'react';
import { 
  Route, 
  Switch, 
  withRouter
} from 'react-router-dom';

import {
  Login,
  Registration,
  Profile
} from '../components/pages';


const Routes = () => (
  <Switch>
    <Route exact path='/' component={ Registration }/>
    <Route path='/login' component={ Login }/>
    <Route path='/profile' component={ Profile }/>
    <Route>
  </Switch>
)

export default withRouter(Routes);