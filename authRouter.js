const Router = require("express");
const router = new Router();
const controller = require("./authController");
const { check } = require("express-validator");
// const authMiddleware = require("./middleware/authMiddleware");
const roleMiddleware = require("./middleware/roleMiddleware");

router.post(
    "/registration",
    [
        check("username", "Field username is required").notEmpty(),
        check("password", "Field password is required").isLength({min: 4, max: 12}),
    ],
    controller.registration
);

router.post("/login", controller.login);

router.get("/users", roleMiddleware(["ADMIN"]), controller.getUsers);

module.exports = router;
