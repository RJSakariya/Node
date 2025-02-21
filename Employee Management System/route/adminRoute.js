const express = require('express');
const adminRoute = express.Router();
const adminController = require('../controller/adminController');
const authentication = require('../middleware/jwt');
const upload = require('../middleware/upload');

adminRoute.post("/Register", upload, adminController.adminRegister);
adminRoute.post("/Login", adminController.adminLogin);
adminRoute.get("/AdminList", authentication, adminController.adminList);
adminRoute.get("/AdminProfile", authentication, adminController.adminProfile);
adminRoute.post("/ChangePassword", authentication, adminController.adminChangePassword);
adminRoute.post("/ForgotPassword", adminController.forgotPassword);
adminRoute.delete("/Delete", authentication, adminController.deleteAdmin);
adminRoute.put("/Update", authentication, upload, adminController.updateAdmin);

module.exports = adminRoute;