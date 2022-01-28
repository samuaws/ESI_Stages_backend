const Stage = require("../models/stage");
const Promoteur = require("../models/promoteur");
const Encadreur = require("../models/encadreur");
const Group = require("../models/group");
const Entreprise = require("../models/entreprise");
const user = require("../models/user");
module.exports = {
createStage : async (req, res) => {
    console.log("yakh rana ndirou  reaq hna");
    const {name,Type,description,dateDeb ,dateFin,encadreur,annee,group,promoteur,entreprise} = req.body;
    try {
       const prom = await Promoteur.findOne({last_Name : new RegExp(promoteur,"i")}),
            enc = await Encadreur.findOne({last_Name : new RegExp(encadreur,"i")}),
            grp = await Group.findOne({name : new RegExp(group,"i")});
            ent = await Entreprise.findOne({name : new RegExp(entreprise,"i")});
        let stage = await Stage.create({name,Type,description,dateDeb ,dateFin,annee,Encadreur:enc,group:grp,promoteur:prom,entreprise:ent});
        stage.save(); 
        res.status(201).json(stage);
    } catch (e) {
        res.json({ error: e.message });
    }
},
showStage : async (req,res) => {
    
    id = req.params.id ;
    console.log(id);
    try{
        const st = await Stage.findById(id).populate("entreprise").populate("promoteur").populate("Encadreur").populate("group");
        res.status(201).json(st);
    }
    catch(e)
    {
        res.json({ error: e.message });
    }
},

showListStage: async (req,res) => {
    console.log("TIZIIIIIIIIIIIIIIII");
    try{
        const st = await  Stage.find().populate("entreprise");
        res.status(201).json(st);
    }
    catch(e)
    {
        res.json({ error: e.message });
    }
},
showAvailableStage : async (req, res) => {
try {
    let st = await Stage.find({Available : true}).populate("entreprise");
    res.status(201).json(st);
}
catch(e)
{
    res.json({ error: e.message });
}
},
showValideStage : async (req, res) => {
try {
    let st = await Stage.find({Valide : false , Available : false}).populate("group");
    res.status(201).json(st)
}
catch(e)
{
    res.json({ error: e.message });
}
},
showPFEStage : async (req, res) => {
try {
    let st = await Stage.find({Type : "PFE" }).populate("entreprise");
    res.status(201).json(st)
}
catch(e)
{
    res.json({ error: e.message });
}
},
showPFEVStage : async (req, res) => {
try {
    let st = await Stage.find({ Valide :true}).populate("group").populate("entreprise");
    res.status(201).json(st)
}
catch(e)
{
    res.json({ error: e.message });
}
},
showPFEIStage : async (req, res) => {
try {
    let st = await Stage.find({ Valide :true , Type : "PFE" }).populate("entreprise");
    res.status(201).json(st)
}
catch(e)
{
    res.json({ error: e.message });
}
},
showAnneeStage : async (req, res) => {
try {
    let st = await Stage.distinct('annee',{Type : "PFE" });
    res.status(201).json(st)
}
catch(e)
{
    res.json({ error: e.message });
}
},
showAnneeEntreprise : async (req, res) => {
try {
    const id = req.params.id;
    let nbe = await Stage.distinct('entreprise',{annee : id , Valide : true });
    nb = nbe.length;
    res.status(201).json({ "nbe" : nb})
}
catch(e)
{
    res.json({ error: e.message });
}
},

updateStage: async (req, res) => {
    const {name,Type,description,dateDeb ,dateFin,encadreur,annee,group,promoteur,entreprise,Available,Valide} = req.body,
    id = req.params.id;
   

       const prom = await Promoteur.findOne({last_Name : new RegExp(promoteur,"i")})  
    
    
        
      const  enc = await Encadreur.findOne({last_Name : new RegExp(encadreur,"i")});
    
    

        const grp = await Group.findOne({name : new RegExp(group,"i")});
    


        const ent = await Entreprise.findOne({name : new RegExp(entreprise,"i")});
    
        
    try {
        const st = await Stage.findById(id);
        st.name = name ? name : st.name;
        st.Type = Type ? Type : st.Type;
        st.description = description ? description : st.description;
        st.dateDeb = dateDeb ? dateDeb : st.dateDeb;
        st.dateFin = dateFin ? dateFin : st.dateFin;
        st.annee = annee ? annee : st.annee;
        st.Encadreur = enc ? enc : st.Encadreur;
        st.group = grp ? grp : st.group;
        st.promoteur = prom ? prom : st.promoteur;
        st.entreprise = ent ? ent : st.entreprise;
        st.Available  = (Available != undefined) ? Available  : st.Available ;
        st.Valide  = (Valide != undefined) ? Valide  : st.Valide ;
        
        await st.save();
        res.status(201).send(st);
    } catch (e) {
        res.json({ error: e.message });
    }
},
updateStageValide: async (req, res) => {
    console.log("guuuhshdjxnnnnnnnnnnnnnnnnnnnn")
    id = req.params.id;   
    try {
        const st = await Stage.findById(id);
        st.group = undefined ;
        st.Available  = true ;
        st.save();
        res.status(201).send(st);
    } catch (e) {
        res.json({ error: e.message });
    }
},
addGroup : async (req, res) => {
   id = req.params.id;
   const {grp_id} = req.body;
   try {
       console.log("hhhhhhhhhhhhhhhhhhhhhhh");
       console.log(grp_id);
       let stage = await Stage.findById(id);
       let  grp = await Group.findById(grp_id);
       stage.Available=false;
       console.log(grp);
       stage.group = grp;
       stage.group.save()
       console.log(stage.group);
        stage.save()
        res.json(stage);
    } catch (e) {
        res.json({ error: e.message });
    }
},
deleteStage: async (req, res) => {
    console.log("hellooooooo");
    try {
        const id = req.params.id,
         st = await Stage.findById(id);
        await st.remove();
        res.json({ deleted: "successfully" });
    } catch (e) {
        res.json({ error: e.message });
    }
},



}