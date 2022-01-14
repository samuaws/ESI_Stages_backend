const express = require("express"),
{createEncadreur,showEncadreur,updateEncadreur,deleteEncadreur} = require("../middleware/encadreur"),
{isLoggedIn,isAdmin} = require("../middleware/auth");

router.route("/").get(showEncadreur).post(isLoggedIn,isAdmin,createEncadreur);// rak katb is admin bach yzid
router.route("/:id").get(showEncadreur).put(isLoggedIn,isAdmin, updateEncadreur).delete(isLoggedIn,isAdmin,deleteEncadeur);
//3lah drna showencadreur 2 fois
module.exports = router; 