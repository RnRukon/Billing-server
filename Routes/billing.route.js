const express = require("express");
const { addBilling, getBilling, updateBilling, deleteBilling, getSingleBilling } = require("../controllers/billing.controller");
const checkLogin = require("../Middleware/checkLogin");



const router = express.Router();



router.post("/add-billing", checkLogin, addBilling);
router.get("/billing-list", checkLogin, getBilling);

router.get("/billing-single/:id", checkLogin, getSingleBilling);

router.patch("/update-billing/:id", checkLogin, updateBilling);
router.delete("/delete-billing/:id", checkLogin, deleteBilling);



module.exports = router;