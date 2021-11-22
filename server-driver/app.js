const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const PORT = 5000;
const session = require('express-session');
const testSDK = require('ts-sdk-test');

const auth = testSDK.initializeApp({
    "clientID": "Mm2adXV2jnL9pfo2kCHIEi_ej3Aa",
    "serverOrigin": "https://api.asgardeo.io/t/iconicto",
    "signInRedirectURL": "http://localhost:5000/authorize",
    "signOutRedirectURL": "http://localhost:5000/logoutsuccess",
    "enableOIDCSessionManagement": true,
    "scope": ["openid", "profile"],
    "validateIDToken": false,
    "executionEnvironment": "NODE",
    "storage": "memoryCacheStorage"
});;

app.use(cookieParser());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'my-awesome-secret'
}));


app.get("/login", (req, res) => {
    testSDK.getAuthURL(auth).then(url => {
        console.log(url)
        if (url){
            res.redirect(url)
        }
    }).catch(err => {
        console.log(err)
    })
})

app.get("/authorize", (req,res)=>{
    if (req.query.code) {
        testSDK.requestAccessToken(req.query.code, req.query.session_state, auth).then(response => {
            console.log("token", response)
            res.send(response)
          }).catch(err => {
            console.log(err)
            res.send(err)
          })
    }
})





app.listen(PORT, ()=> {console.log(`Server Started at PORT ${PORT}`)});
