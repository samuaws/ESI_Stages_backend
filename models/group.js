const mongoose = require("mongoose");

groupSchema = new mongoose.Schema({
etudiants : [
    {
        type: mongoose.Types.ObjectId,
            ref: "user",          
    }
]

});
module.exports = mongoose.model("Group", groupSchema);