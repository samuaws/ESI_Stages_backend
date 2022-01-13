const mongoose = require("mongoose");

stageSchema = new mongoose.Schema({
    Type :{
        type: String,
        enum : ['ouvrier','technique',"PFE"],
    },

    description : String ,
    dateDeb : Date,
    dateFin : Date,
    Encadreur : {type: mongoose.Types.ObjectId, 
             ref: "encadreur" ,} ,
    group : {
        type: mongoose.Types.ObjectId, 
             ref: "group" ,} ,
    promoteur : {
        type: mongoose.Types.ObjectId, 
             ref: "probmoteur" ,} ,
    
    
    Available :{
        type : Boolean,
        default : true,
    }
    

});
module.exports = mongoose.model("Stage", stageSchema);