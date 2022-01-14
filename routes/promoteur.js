const express = require("express"),
{createPromoteur,showPomotreur,showAvailablePromoteur,updatePromoteur,deletePromoteur}=require("../middleware/promoteur"),
{isLoggedIn,isAdmin} = require("../middleware/auth");
router.route("/").get(showPomotreur).post(isLoggedIn,isAdmin,createPromoteur);
router.route("/available").get(showAvailablePromoteur);
 router.route("/:id").get(showPromoteur).put(isLoggedIn,isAdmin, updatePromoteur).delete(isLoggedIn,isAdmin,deletePromoteur);
module.exports = router; 