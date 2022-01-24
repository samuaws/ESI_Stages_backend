const mongoose = require("mongoose");

groupSchema = new mongoose.Schema({
name : {
        required: true,
        type: String,
        unique: true,
        },
etudiants : [
    {
        type: mongoose.Types.ObjectId,
            ref: "user",          
    }
]

});
module.exports = mongoose.model("Group", groupSchema);