// const UserModel = require('../models/UserModel');
// const express = require('express');
// const router = express.Router();
// const requireLogin = require('../middlewares/requireLogin');


// router.get('/api/scores', requireLogin, async (req, res) => {
//     const users = await UserModel.find( {}, 'name score -_id').sort({ score: -1 }).limit(100);
//     return res.status(200).send(users)
    
// });

// // router.post('/api/scores/post', requireLogin, async (req, res) => {
// //     // DONT FORGET TO ADD SCORE LATER
// //     const { googleId, name, score} = req.body;
// //     await UserModel.updateOne({ googleId }, { name: name }, { score: score});
// //     // dummy data -- must have save to save changes
// //     // req.user.name = "AAA";
// //     // req.user.score = 8;
// //     await req.user.save();

// //     res.status(200).json({ status: "Success"});
// // });

// router.post('/api/scores/post', async (req, res, next) => {
    
//     let regdata = await new UserModel(req.body);
//     await regdata.save()
//     .then(item => {
//        res.status(200).send("Score has been saved to the database!")
//      })
//      .catch(err => {
//        res.status(400).send("Unable to save the item to the database!");
//      });
//   });

const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');
const UserModel = require('../models/UserModel');

router.get('/api/scores', async (req, res) => {
    const users = await UserModel.find( {}, 'name score -_id').sort({ score: -1 }).limit(100);
    return res.status(200).send(users)
});

router.post('/api/scores/post', passport.authenticate('jwt', { session: false }), async (req, res) => { 
    
    let regdata = await new UserModel(req.body);
    await regdata.save()
    .then(item => {
       res.status(200).send("Score has been saved to the database!")
     })
     .catch(err => {
       res.status(400).send("Unable to save the item to the database!");
     });
  });

module.exports = router;