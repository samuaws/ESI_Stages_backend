 const express = require("express"),
 {createPromoteur,showListPomotreur,showPromoteur,showAvailablePromoteur,updatePromoteur,deletePromoteur}=require("../middleware/promoteur"),
 {isLoggedIn,isAdmin} = require("../middleware/auth");
 router = express.Router();
 router.route("/").get(showListPomotreur).post(isLoggedIn,isAdmin,createPromoteur);
 router.route("/available").get(showAvailablePromoteur);
 router.route("/:id").get(showPromoteur).put(isLoggedIn,isAdmin, updatePromoteur).delete(isLoggedIn,isAdmin,deletePromoteur);
 module.exports = router; 