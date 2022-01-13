const express = require("express"),
// {showStage,createStage,showAvailableStage,updateStage,deleteStage} = require("../middleware/stage"),
{createStage} = require("../middleware/stage"),
{isLoggedIn,isAdmin} = require("../middleware/auth");
router = express.Router();
// /stage
//router.route("/").get(showStage).post(createStage);
router.route("/").post(createStage);
// router.route("/available").get(showAvailableStage)
// router.route("/:id").get(showStage).put(isLoggedIn,isAdmin, updateStage).delete(isLoggedIn,isAdmin,deleteStage);
module.exports = router; 

