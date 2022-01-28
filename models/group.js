const mongoose = require("mongoose");

groupSchema = new mongoose.Schema({
name : {
        required: true,
        type: String,
        unique: true,
        },
type :{ 
    type: String,
    enum : ['ouvrier','technique',"PFE"],
    
},
etudiants : [
    {
        type: mongoose.Types.ObjectId,
            ref: "User",          
    }
]

});
module.exports = mongoose.model("Group", groupSchema);