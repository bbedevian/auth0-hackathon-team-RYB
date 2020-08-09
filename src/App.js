import React, { useEffect } from 'react';
import './App.css';
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
    <Auth0Provider
    domain="dev-9-s-7qkj.us.auth0.com"
    clientId="s1xEinrrqh4VLm1Vf9Ji1F1ciz4Rm4oA"
    redirectUri="http://localhost:3000">
      <div className="App">
        <FnFList/>
      </div>
      <LoginButton/>
      <LogoutButton/>
      <div>Profile Component Below</div>
      <Profile/>
    </Auth0Provider>
  );
}

export default App;
