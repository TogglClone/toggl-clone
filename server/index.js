const express = require('express'),
session =require('express-session'),
passport = require('passport'),
Auth0Strategy = require('passport-auth0'),
massive = require('massive'),
bodyParser = require('body-parser');
require('dotenv').config()

const { SERVER_PORT,
        SESSION_SECRET,
        DOMAIN,
        CLIENT_ID,
        CLIENT_SECRET,
        CALLBACK_URL,
        CONNECTION_STRING
    }=process.env ;

const app = express();
app.use( bodyParser.json() );
massive(CONNECTION_STRING).then(db=>app.set('db',db));
app.use(session({
    secret:SESSION_SECRET,
    resave:false,
    saveUninitialized:true
}))


app.use(passport.initialize())
app.use(passport.session())
app.use(express.static(__dirname + '/../build'));


passport.use(new Auth0Strategy({
    domain:DOMAIN,
    clientID:CLIENT_ID,
    clientSecret:CLIENT_SECRET,
    callbackURL:CALLBACK_URL,
    scope:'openid profile'
}, function(accessToken, refreshToken, extraParamsm, profile, done){
    app.get('db').check_if_user([profile.user_id]).then( resp => {
        console.log(profile.user_id, 'profile')
        if (resp[0]){
            return done(null, resp[0].id)
        }else {
            app.get('db').create_user([profile.user_id]).then(resp =>{
                return done(null, resp[0].id)
            })
        }
    })
   
}));

passport.serializeUser(function(id, done){
    done(null, id)
    console.log(id, 'Auth_id')
});
passport.deserializeUser(function(id, done){
    done(null, id)
});
// AUTH ENDPOINTS--------------------- 
app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
   successRedirect:'http://localhost:3000/#/'
}))
app.listen(SERVER_PORT,()=>{console.log("listening")})
