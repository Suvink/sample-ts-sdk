import React, { useEffect } from 'react';
import queryString from 'query-string';
import logo from './logo.svg';
import './App.css';
// const testSDK = require('ts-sdk-test');
import testSDK from 'ts-sdk-test';

function App() {

  const auth = testSDK.initializeApp({
    "clientID": "Mm2adXV2jnL9pfo2kCHIEi_ej3Aa",
    "serverOrigin": "https://api.asgardeo.io/t/iconicto",
    "signInRedirectURL": "http://localhost:3000",
    "signOutRedirectURL": "http://localhost:3000",
    "enableOIDCSessionManagement": true,
    "scope": ["openid", "profile"],
    "validateIDToken": false
  });;

  useEffect(() => {
    const parsed = queryString.parse(window.location.search);
    if (parsed) {
      requestAT(parsed)
    }
  }, []);

  const requestAT = (data) => {
    console.log(auth)
    testSDK.requestAccessToken(data.code, data.session_state, auth).then(response => {
      console.log("token", response)
    }).catch(err => {
      console.log(err)
    })
  }

  const login = () => {

    //Get Authorization URL
    testSDK.getAuthURL(auth).then(url => {
      console.log(url)
      if (url) window.location.href = url;
    }).catch(err => {
      console.log(err)
    })
  }

  const OidcEndpoints = () => {
    testSDK.getOIDCEndpoints(auth).then(response => {
      console.log(response)
    }).catch(err => {
      console.log(err)
    })
  }

  




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={login}>Log in</button>
        <button onClick={OidcEndpoints}>OIDC EP</button>
      </header>
    </div>
  );
}

export default App;
