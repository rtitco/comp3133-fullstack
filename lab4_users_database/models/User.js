const mongoose = require('mongoose');

var validateEmail = (email) => {
    var emailRgx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    return emailRgx.test(email)
};

var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter name.']
    },
    username: {
        type: String,
        required: [true, 'Username is required.'],
        minlength: 4
    },
    email: {
        type: String,
        required: [true, 'Please enter a valid email address'],
        validate: [validateEmail, 'Email is not valid'],
        match: [/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/, "Please enter valid email"]
    },
    address: {
        street: {
            type: String,
            required: [true, 'All address fields required']
        },
        suite: {
            type: String,
            required: [true, 'All address fields required']
        },
        city: {
            type: String,
            required: [true, 'All address fields required'],
            match: [/^[a-zA-Z0-9 ]{1,}$/, "City can only have letters and spaces"]
        },
        zipcode: {
            type: String,
            required: [true, 'All address fields required'],
            match: [/^([\d]{5}){1}-([\d]{4}){1}$/, "Valid zipcode format: 12345-1234"]
        },
        geo: {
            lat: {
                type: String,
                required: [true, 'All address fields required']
            },
            lng: {
                type: String,
                required: [true, 'All address fields required']
            }
        },
        phone: {
            type: String,
            required: [true, 'All address fields required'],
            match: [/^[\d]{1}(-[\d]{3}){2}-[\d]{4}$/, "Valid format: D-DDD-DDD-DDDD"]
        }
    }
})

const User = mongoose.model("User", UserSchema);
module.exports = User;