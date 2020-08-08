// const passport = require('passport'),
//     GoogleStrategy = require('passport-google-oauth20').Strategy,
//     keys = require('../config/keys'),
//     mongoose = require('mongoose');

// const User = mongoose.model('users');

// passport.serializeUser((user, done) => {
//     done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//     User.findById(id)
//         .then(user => {
//             done(null, user);
//         });
// });

// passport.use(
//     new GoogleStrategy(
//         {
//             clientID: keys.googleClientID,
//             clientSecret: keys.googleClientSecret,
//             callbackURL: '/auth/google/callback',
//             proxy: true
//         },
//         async (accessToken, refreshToken, profile, done) => {
//             console.log('access token', accessToken);
//             console.log('refresh token', refreshToken);
//             console.log('profile:', profile);

//            const existingUser = await User.findOne({ googleId: profile.id });
//             if (existingUser) {
//                 done(null, existingUser);
//             } else {
//                 const user = await new User({ googleId: profile.id }).save()
//                 done(null, user);
//             }
//         }      
//     )
// );

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const UserModel = mongoose.model('users');
const keys = require('../config/dev')

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secret;

module.exports = passport => {
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        UserModel.findById(jwt_payload.id)
        .then(user => {
            if(user) {
                return done(null, user);
            }
            return done(null, false);
        })
        .catch(err => console.log(err));
    }));
}