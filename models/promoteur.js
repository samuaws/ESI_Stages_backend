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
discription: {
     type: String,
        },       
//add an image with default empty image 
Available :{
         type : Boolean,
        default : true,
}
    
})
module.exports = mongoose.model("Promoteur", promoteurSchema);    