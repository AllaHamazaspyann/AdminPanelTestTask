import React from 'react';
import { 
  Route, 
  Switch, 
  withRouter
} from 'react-router-dom';

import {
  Login,
  Registration,
  Profile,

} from '../components/pages';

import {
  BlogsForm,
} from '../components/'


const Routes = () => (
  <Switch>
    <Route exact path='/' component={ Registration }/>
    <Route path='/login' component={ Login }/>
    <Route path='/profile' component={ Profile }/>
    <Route path='/add_blog' component={ BlogsForm }/>
  </Switch>
)

export default withRouter(Routes);