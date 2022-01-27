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
        const st = await Stage.findById(id).populate("entreprise").populate("promoteur").populate("Encadreur");
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
updateStage: async (req, res) => {
    console.log("vhjabchbhjsebdhfjsrhjvhsjevhsr vhjsrvhsrbvjhsrbvhsbrhvsjhhvhsvsrhjsvhfsfejehjsebsrhvsrnbnbvjc h nc cbjkzdzbkjsd s s  je.");
    const {name,Type,description,dateDeb ,dateFin,encadreur,annee,group,promoteur,entreprise,Available,Valide} = req.body,
    id = req.params.id,
        prom = await Promoteur.findOne({last_Name : new RegExp(promoteur,"i")}),   
        enc = await Encadreur.findOne({last_Name : new RegExp(encadreur,"i")}),
        grp = await Group.findOne({name : new RegExp(group,"i")}),
        ent = await Entreprise.findOne({name : new RegExp(entreprise,"i")});
        console.log(Available);
        
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
       let stage = await Stage.findById(id);
       let  grp = await Group.findById(grp_id);
       console.log(grp);
        stage.group = grp;
        stage.save()
        res.json(user.group);
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