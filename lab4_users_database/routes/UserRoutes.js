const express = require('express');
const userModel = require('../models/User.js');
const { json } = require('express');
const app = express();

app.post('/', async (req, res) => {
    let newUser = new userModel(req.body);
    try {
        let error = newUser.validateSync();
        assert.equal(error.errors['name'].message, 'Name required');

        await newUser.save((err, res) => {
            if (err) {
                //error handling
                newUser.send({ message: "Failed to add new truck." })
            }
            else {
                newUser.send({ message: "New truck added to fleet." });
            }
        });
    }
    catch (err) {
        res.status(500).send(err);

    }
});

module.exports = app;
