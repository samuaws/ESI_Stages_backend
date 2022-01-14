 const express = require("express"),
{createEntreprise,showListEntreprise,showEntreprise,updateEntreprise,deleteEntreprise} =require("../middleware/entreprise"),
{isLoggedIn,isAdmin}=require("../middleware/auth"),
router = express.Router();


 router.route("/").get(showListEntreprise).post(isLoggedIn,isAdmin,createEntreprise);
 router.route("/:id").get(showEntreprise).put(isLoggedIn,isAdmin, updateEntreprise).delete(isLoggedIn,isAdmin,deleteEntreprise);
 module.exports = router; 