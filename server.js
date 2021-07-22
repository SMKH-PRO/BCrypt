'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const fccTesting = require('./freeCodeCamp/fcctesting.js');
const app = express();
const bcrypt = require('bcrypt');
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


//START_ASYNC -do not remove notes, place code between correct pair of notes.

bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    console.log("hash",hash);
    bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
        console.log("compare",res); //true
    });
});

//END_ASYNC

//START_SYNC



//END_SYNC






























app.listen(process.env.PORT || 3000, () => { });
