const testSDK = require('ts-sdk-test');

const auth = testSDK.initializeApp({
  "clientID": "Mm2adXV2jnL9pfo2kCHIEi_ej3Aa",
  "serverOrigin": "https://api.asgardeo.io/t/iconicto",
  "signInRedirectURL": "https://localhost:5000",
  "signOutRedirectURL": "https://localhost:5000",
  "enableOIDCSessionManagement": true,
  "scope": [ "openid","profile" ],
  "validateIDToken": false
});

//Get Authorization URL
testSDK.getAuthURL(auth).then(response => {
  console.log(response)
}).catch(err => {
  console.log(err)
})

//Request Access Token
testSDK.requestAccessToken("622a4029-df8b-3ea5-a63f-82e0146a2ff8", "c1ef43284d4f9868dac14a36e240c4a9216a6577188d1f35588985334de00122.3e5DoC_YeZpKoGQU0o2c3w", auth).then(response => {
  console.log(response)
}).catch(err => {
  console.log(err)
})

// //Get Sign Out URL
testSDK.getLogoutURL(auth).then(response => {
  console.log(response)
}).catch(err => {
  console.log(err)
})

//Get Data Layer
testSDK.getDL(auth).then(response => {
  console.log(response)
}).catch(err => {
  console.log(err)
})

//Get OIDC Service endpoints
testSDK.getOIDCEndpoints(auth).then(response => {
  console.log(response)
}).catch(err => {
  console.log(err)
})

// //Get ID Token
// testSDK.getIDToken(auth).then(response => {
//   console.log("idtoken",response)
// }).catch(err => {
//   console.log(err)
// })