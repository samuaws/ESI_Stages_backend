const express = require("express"),
{showListStage,showPFEStage,addGroup,showStage,showAnneeStage,createStage,showAvailableStage,updateStage,deleteStage,showValideStage,updateStageValide} = require("../middleware/stage"),
// {createStage} = require("../middleware/stage"),
{isLoggedIn,isAdmin} = require("../middleware/auth");
router = express.Router();
// /stage
router.route("/").get(showListStage).post(isLoggedIn,isAdmin,createStage);
router.route("/available").get(showAvailableStage);
router.route("/valide").get(showValideStage);
router.route("/PFE").get(showPFEStage);
router.route("/annee").get(showAnneeStage);
router.route("/grp/:id").put(addGroup);
router.route("/valide/:id").put(isLoggedIn,updateStageValide);
router.route("/:id").get(showStage).put(isLoggedIn,updateStage).delete(isLoggedIn,isAdmin,deleteStage);

module.exports = router; 