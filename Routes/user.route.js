const express = require("express");
const { registration, login, getMe, logout } = require("../controllers/user.controller");
const router = express.Router();



router.post("/registration", registration);
router.post("/login", login);
router.get("/get-me/:email", getMe);
router.patch("/logout/:email", logout);


module.exports = router;