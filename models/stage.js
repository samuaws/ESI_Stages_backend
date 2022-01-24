const mongoose = require("mongoose");

stageSchema = new mongoose.Schema({
    name :{
        required: true,
        type: String,
        unique: true,
                },
    Type :{
        type: String,
        enum : ['ouvrier','technique',"PFE"],
        
    },

    description : String ,
    dateDeb : Date,
    dateFin : Date,
    Encadreur : {type: mongoose.Types.ObjectId, 
             ref: "Encadreur" ,} ,
    group : {
        type: mongoose.Types.ObjectId, 
             ref: "Group" ,} ,
    promoteur : {
        type: mongoose.Types.ObjectId, 
             ref: "Promoteur" ,} ,
    annee : Number ,
    entreprise : {
        type: mongoose.Types.ObjectId, 
             ref: "Entreprise" ,} ,
    Available :{
        type : Boolean,
        default : true,
    }
   
});
module.exports = mongoose.model("Stage", stageSchema);