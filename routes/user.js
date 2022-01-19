const express = require("express"),
    { isLoggedIn, isAdmin } = require("../middleware/auth"),
    { showUser,showUserByToken, updateUser, userToAdmin,deleteUser } = require("../middleware/user");
router = express.Router();
// /users
router.route("/").get(isLoggedIn, showUserByToken);
router.route("/:id").get(showUser).put(isLoggedIn, updateUser).delete(isLoggedIn,deleteUser);
router.route("/:id/toAdmin").put(isLoggedIn, isAdmin, userToAdmin);

module.exports = router; 