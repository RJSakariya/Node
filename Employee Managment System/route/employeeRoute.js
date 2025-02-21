const express = require('express');
const employeeRoute = express.Router();
const employeeController = require('../controller/employeeController');
const checkAdminOrManager = require('../middleware/checkAdminOrManager');
const authentication = require('../middleware/jwt');
const upload = require('../middleware/upload');

employeeRoute.post("/register", authentication, upload, employeeController.employeeRegister);
employeeRoute.post("/login", employeeController.employeeLogin);
employeeRoute.get("/list", authentication, checkAdminOrManager, employeeController.employeeList);
employeeRoute.get("/profile", authentication, employeeController.employeeProfile);
employeeRoute.post("/changePassword", authentication, employeeController.employeeChangePassword);
employeeRoute.post("/forgotPassword", employeeController.forgotPassword);
employeeRoute.post("/resetPassword", employeeController.resetPassword);
employeeRoute.delete("/delete", authentication, checkAdminOrManager, employeeController.deleteemployee);
employeeRoute.put("/update", authentication, upload, employeeController.updateemployee);

module.exports = employeeRoute;