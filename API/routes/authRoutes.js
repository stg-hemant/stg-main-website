const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const contactController = require("../controllers/contactController");

router.post("/login", authController.loginUser);
router.patch("/change-password", authController.changePassword);

router.post("/contact", contactController.saveContactMessage);

module.exports = router;
