// const express = require('express'),
//     router = express.Router(),
//     passport = require('passport');

// router.get('/auth/google', passport.authenticate('google', {
//     scope: ['profile', 'email']
//   }));
  
// router.get('/auth/google/callback',
//     passport.authenticate('google'),
//     (req, res) => {
//         res.redirect('/');
//     }
// );

// router.get('/api/logout', (req, res) => {
//     req.logout();
//     // To tell users that you have logged out - sets to undefined
//     res.redirect('/')
// });

// // deserialize user function makes the user model instance add to req object as req.user
// router.get('/api/current_user', (req, res) => {
//     res.send(req.user);
// });

const express = require('express'),
  router = express.Router(),
  bcrypt = require('bcrypt'),
  jwt = require('jsonwebtoken'),
  keys = require('../config/dev'),
  passport = require('passport');

// Add when validation is added
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');

const UserModel = require('../models/UserModel');

router.post('/register', function(req, res) {

    // part of validation
    const { errors, isValid } = validateRegisterInput(req.body);
  
    if(!isValid) {
      return res.status(400).json(errors);
    }
    
    UserModel.findOne({ email: req.body.email })

    // validation
    .then(user => {
      if(user) {
        errors.email = 'Email already taken';
        return res.status(400).json(errors);
      } else {
        const newUser = new UserModel({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          })
        });
      }
    });
});

router.post('/login', function (req, res) {

    // validation
    const { errors, isValid } = validateLoginInput(req.body);
  
    if(!isValid) {
      return res.status(400).json(errors);
    }
  
    const email = req.body.email;
    const password = req.body.password;
  
    UserModel.findOne({ email: email })
      .then(user => {
        if(!user) {
          errors.email = "User not found";
          return res.status(404).json({email: 'User not found'})
        }
        bcrypt.compare(password, user.password)
          .then(isMatch => {
            if(isMatch) {
  
              const payload = { id: user.id, name: user.name }
              jwt.sign(payload, keys.secret, { expiresIn: 86400 },
                (err, token) => {
                  res.json({
                    success: true,
                    token: 'Bearer ' + token
                  });
                }
              );
            } else {
              errors.password = 'Invalid password'
              return res.status(400).json(errors);
            }
        });
    });
});

// method to check if logged in successfully
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    })
});

module.exports = router;