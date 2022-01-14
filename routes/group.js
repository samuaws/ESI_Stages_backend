 const express = require("express"),
 {createGroup,showListGroup,showGroup,updateGroup,deleteGroup} =require("../middleware/Group"),
 {isLoggedIn,isAdmin}=require("../middleware/auth");


 router.route("/").get(showListGroup).post(isLoggedIn,isAdmin,createGroup);
 router.route("/:id").get(showGroup).put(isLoggedIn,isAdmin, updateGroup).delete(isLoggedIn,isAdmin,deleteGroup);
 module.exports = router; 