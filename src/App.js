import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import Navigation from './Navigation/Navigation'
import MyPlaces from './places/pages/MyPlaces';
import UpdatePlace from './places/UpdatePlace/UpdatePlace';
import Auth from './user/pages/Auth';
import { useDispatch } from 'react-redux';
import * as actionType from './store/actions/AuthAction'
import Logout from './user/pages/Logout';
import UserProfile from './user/components/user-profile/UserProfile';

const App = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(actionType.authState())

  }, [dispatch])

  

  return (
    <Router>
    <Navigation/>
      <Switch>

        <Route path="/" exact>
          <Users />
        </Route>

        <Route path="/place/new" exact>
          <NewPlace />
        </Route>

        <Route path="/place/:placeId" >
          <UpdatePlace />
        </Route>

        <Route path="/me" >
          <MyPlaces />
        </Route>

        <Route path="/profile/:userId" >
          <UserProfile />
        </Route>

        <Route path="/auth" >
          <Auth />
        </Route>

        <Route path="/logout" >
          <Logout/>
        </Route>

        <Redirect to="/" />
      </Switch>
      
    </Router>
  );
};

export default App;
