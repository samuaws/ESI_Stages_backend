const mongoose = require("mongoose"),
   
entrepriseSchema = new mongoose.Schema({
name: {
    required: true,
    type: String,
    unique: true,
            },
adresse: {
    type: String,
           },
ville: {
     type: String,
        },
encadreurs :[
    {
        type: mongoose.Types.ObjectId,
            ref: "encadreur",    
    }
]

    
})
module.exports = mongoose.model("Entreprise", entrepriseSchema);    