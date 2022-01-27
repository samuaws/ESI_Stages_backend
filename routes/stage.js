const express = require("express"),
{showListStage,addGroup,showStage,createStage,showAvailableStage,updateStage,deleteStage,showValideStage,updateStageValide} = require("../middleware/stage"),
// {createStage} = require("../middleware/stage"),
{isLoggedIn,isAdmin} = require("../middleware/auth");
router = express.Router();
// /stage
router.route("/").get(showListStage).post(isLoggedIn,isAdmin,createStage);
router.route("/available").get(showAvailableStage);
router.route("/valide").get(showValideStage);
router.route("/grp/:id").put(addGroup);
router.route("/valide/:id").put(isLoggedIn,updateStageValide);
router.route("/:id").get(showStage).put(isLoggedIn,updateStage).delete(isLoggedIn,isAdmin,deleteStage);

module.exports = router; 

