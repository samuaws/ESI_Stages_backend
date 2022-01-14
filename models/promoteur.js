const mongoose = require("mongoose"),
   
promoteurSchema = new mongoose.Schema({
first_Name: {
    required: true,
    type: String,
            },
last_Name: {
    required: true,
    type: String,
           },
email: {
     type: String,
        },
domaine :{
        type: String,
        enum : ['AI','SECURITE','MIV','RESEAU'],
        },
Available :{
         type : Boolean,
        default : true,
}
    
})
module.exports = mongoose.model("Promoteur", promoteurSchema);    