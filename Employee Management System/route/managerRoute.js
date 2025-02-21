const express = require('express');
const managerRoute = express.Router();
const managerController = require('../controller/managerController');
const authentication = require('../middleware/jwt');
const checkAdminOrManager = require('../middleware/checkAdminOrManager');
const upload = require('../middleware/upload');

managerRoute.post("/Register", authentication, upload, managerController.managerRegister);
managerRoute.post("/Login", managerController.managerLogin);
managerRoute.get("/List", authentication, checkAdminOrManager, managerController.managerList);
managerRoute.get("/Profile", authentication, managerController.managerProfile);
managerRoute.post("/ChangePassword", authentication, managerController.managerChangePassword);
managerRoute.post("/forgotPassword", managerController.forgotPassword);
managerRoute.delete("/Delete", authentication, checkAdminOrManager, managerController.deleteManager);
managerRoute.put("/Update", authentication, upload, managerController.updateManager);

module.exports = managerRoute;