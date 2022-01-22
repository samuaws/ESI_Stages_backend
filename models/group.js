const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");

groupSchema = new mongoose.Schema({
name : String,
etudiants : [
    {
        type: mongoose.Types.ObjectId,
            ref: "user",          
    }
]

});
module.exports = mongoose.model("Group", groupSchema);