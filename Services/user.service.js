const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv").config();
const User = require("../models/user_module");





exports.getMeService = async (email) => {

    const user = await User.findOne({ email: email });

    return user;
}
exports.LogoutLoService = async (email) => {

    const user = await User.updateOne(
        { email: email },
        { active: false },
        { runValidators: true }
    );

    return user;
}

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
                expiresIn: '24h'
            });

            user.active = true;
            user.access_token
            user?.save()
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