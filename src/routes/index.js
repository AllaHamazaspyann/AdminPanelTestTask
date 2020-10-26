import React from 'react';
import { 
  Route, 
  Switch, 
  withRouter
} from 'react-router-dom';

import Users from '../Pages/Users';
import Edit from '../Pages/Edit';
import Add from '../Pages/Add';

const Routes = () => (
  <Switch>
    <Route path='/newUser' component={ Add }/>
    <Route path='/editUser' component={ Edit }/>
    <Route path='/' component={ Users }/>
   
  </Switch>
)

export default withRouter(Routes);