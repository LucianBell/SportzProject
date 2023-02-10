//Require express router
const routes = require("express").Router();
const controller = require("../controller/controller");

routes.get("/", controller.renderHome);
routes.get("/register", controller.renderRegister);
routes.post("/registerConcluded", controller.registerUser);

module.exports = routes;
