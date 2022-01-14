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
    adrs: string ,
    tlf: string,
    entreprise: { type: mongoose.Types.ObjectId, 
        ref: "entreprise" ,}
    },
  )
  module.exports = mongoose.model("Encadreur", encadreurSchema);