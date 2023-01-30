const Mongoose = require("mongoose");
const validator = require("validator");


const billingSchema = Mongoose.Schema({
    fullName: {
        type: String,
        trim: true,
        minLength: [3, "Name must be at least 3 characters."],
        maxLength: [100, "Name is too large"],
    },
    email: {
        type: String,
        validate: [validator.isEmail, "Provide a valid Email"],
        // unique: [true, "Email address is existed"],
        // required: [true, "Email address is required"],
        lowercase: true,
        trim: true,
    },
    phone: {
        type: String,
        validator: [validator.phone, "Provide a phone number"],
        // unique: [true, "Phone number is existed"],
        // required: [true, "email is required"],
    },
    paidAmount: {
        type: Number,
        // required: [true, "Paid Amount is required"],
    }


},
    {
        timestamps: true,
    }
);

const Billing = Mongoose.model('billing', billingSchema);

module.exports = Billing