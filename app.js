const express = require("express");
const app = express();
const cors = require("cors");

//middlewares
app.use(express.json());
app.use(cors());


// routers
const userRoute = require("./Routes/user.route");
const billingRoute = require("./Routes/billing.route");

app.get("/", (req, res) => {
    res.send("Route is working! YaY!");
});


app.use("/api/", billingRoute);
app.use("/api/", userRoute);

module.exports = app;