const express = require("express"),
{createEncadreur,showEncadreur,showListEncadreur,updateEncadreur,deleteEncadreur} = require("../middleware/encadreur"),
{isLoggedIn,isAdmin} = require("../middleware/auth"),
router = express.Router();

router.route("/").get(showListEncadreur).post(isLoggedIn,isAdmin,createEncadreur);
router.route("/:id").get(showEncadreur).put(isLoggedIn,isAdmin, updateEncadreur).delete(isLoggedIn,isAdmin,deleteEncadreur);

module.exports = router; 