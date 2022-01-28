 const express = require("express"),
 {createGroup,showListGroup,showGroup,updateGroup,deleteGroup} =require("../middleware/Group"),
 {isLoggedIn,isAdmin}=require("../middleware/auth");
 router = express.Router();

 router.route("/").get(showListGroup).post(createGroup);
 router.route("/:id").get(showGroup).put(isLoggedIn,isAdmin, updateGroup).delete(isLoggedIn,isAdmin,deleteGroup);
 module.exports = router; 