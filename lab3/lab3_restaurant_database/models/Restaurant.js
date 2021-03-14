const mongoose = require('mongoose');

var RestaurantSchema = new mongoose.Schema({
    address: {
        building: String,
        street: String,
        zipcode: {
            type: String,
            required: false
        }
    },
    city: String,
    cuisine: String,
    name: String,
    restaurant_id: String
})

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
module.exports = Restaurant;