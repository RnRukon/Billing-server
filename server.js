const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = require("./app");
mongoose.set("strictQuery", false);
// database connection


const dbConnect = () => {
    try {
        mongoose.connect('mongodb+srv://programmingHeroTask:dq9AWQ4wKv9HPQJ0@cluster0.af4at.mongodb.net/Billing?retryWrites=true&w=majority').then(() => {
            console.log(`Database connection is Successfully`);
        })
    } catch (error) {
        console.log(error)
    }
}
dbConnect()



const errorHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err)
    }
    res.status(500).json({
        error: 'Server error'
    })
}

app.use(errorHandler)


// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
