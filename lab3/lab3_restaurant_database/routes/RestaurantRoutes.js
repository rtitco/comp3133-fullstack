const express = require ('express');
const restaurantModel = require('../models/Restaurant');
const app = express();

//Read ALL
// http://localhost:8081/restaurants
// app.get('/restaurants', async (req, res) => {
//     const Restaurants = await restaurantModel.find({});

//     try {
//         res.send(Restaurants);
//     }
//     catch (err) {
//         res.status(500).send(err);
//     }
// });

// http://localhost:3000/restaurants/cuisine/Japanese
// http://localhost:3000/restaurants/cuisine/Bakery
// http://localhost:3000/restaurants/cuisine/Italian
app.get('/restaurants/cuisine/:cuisineType', async (req, res) => {
    const cuisineType = req.params.cuisineType
    const Restaurants = await restaurantModel.find({}).find({cuisine : cuisineType});

    try {
        if(cuisineType.length !=0){
            res.send(Restaurants);
        }
        else {
            res.status(500).send(err);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
});

// http://localhost:3000/restaurants?sortBy=ASC
// http://localhost:3000/restaurants?sortBy=DESC
app.get('/restaurants', async (req, res) => {
    // var sortType = req.query.sortBy
    if(req.query.sortBy == "ASC"){
        const Restaurants = await restaurantModel.find({}).select("id cuisine name city restaurant_id").sort({'restaurant_id': 1});
    }
    else if(req.query.sortBy == "DESC"){
        const Restaurants = await restaurantModel.find({}).select("id cuisine name city restaurant_id").sort({'restaurant_id': -1});
    }


    try {
        res.send(Restaurants);
    }
    catch (err) {
        res.status(500).send(err);
    }
});


module.exports = app;