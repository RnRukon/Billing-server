const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv").config();
const User = require("../models/user_module");


exports.registrationService = async (userInfo) => {

    const hashedPassword = await bcrypt.hash(userInfo.password, 10);

    const newUser = new User({
        name: userInfo.name,
        email: userInfo.email,
        userName: userInfo.userName,
        password: hashedPassword,
        active: false
    });

    const user = await User.create(newUser);
    return user;
};




exports.loginService = async (userInfo) => {

    let user = await User.findOne({ userName: userInfo.userName });

    if (user && user._id) {
        const isValidPassword = await bcrypt.compare(userInfo.password, user.password);

        if (isValidPassword) {
            const token = jwt.sign({
                userName: user.userName,
                userId: user._id
            }, process.env.JWT_SECRET, {
                expiresIn: '1h'
            });

            return {
                access_token: token,
                user: user
            }

        } else {
            throw new Error('Something wrong');

        }
    } else {
        throw new Error('Something wrong');
    }

};