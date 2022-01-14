const mongoose = require("mongoose");

encadreurSchema = new mongoose.Schema({
    first_Name: {
        required: true,
        type: String,
    },
    last_Name: {
        required: true,
        type: String,
    },
    adrs: String ,
    tlf: String,
    entreprise: { type: mongoose.Types.ObjectId, 
        ref: "entreprise" ,}
    },
  )
  module.exports = mongoose.model("Encadreur", encadreurSchema);