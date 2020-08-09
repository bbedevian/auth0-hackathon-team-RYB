import React, { useEffect } from 'react';
import './App.css';
import Dashboard from './containers/Dashboard';
import FnFList from './containers/FnFList';
import {Auth0Provider, useAuth0} from "@auth0/auth0-react"
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import Profile from './components/Profile'

function App() {
  const {user, isAuthenticated} = useAuth0()
  console.log(isAuthenticated)
  console.log(user)
  return (
    <div className="App">
      <h3>Is My Family Safe?</h3>
      <Dashboard/>
    </div>
  );
}

export default App;
