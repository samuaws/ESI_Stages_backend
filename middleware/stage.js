const Stage = require("../models/stage");
const Promoteur = require("../models/promoteur");
const Encadreur = require("../models/encadreur");
const Group = require("../models/group");
module.exports = {
createStage : async (req, res) => {
    const { Type,description,dateDeb ,dateFin,encadreur,group,promoteur} = req.body;
    try {
       const prom = Promoteur.findOne({name : new RegExp(promoteur,"i")}),
            enc = Encadreur.findOne({name : new RegExp(encadreur,"i")}),
            grp = Group.findOne({name : new RegExp(group,"i")});
        let stage = await Stage.create({ Type,description,dateDeb ,dateFin,enc,grp,prom});
        stage.save();
        res.status(201).json(stage);
    } catch (e) {
        res.json({ error: e.message });
    }
},
showStage : async (req,res) => {
    id = req.params.id ;
    try{
        const st = await Stage.findById(id);
        res.status(201).json(st);
    }
    catch(e)
    {
        res.json({ error: e.message });
    }
},

showListStage: async (req,res) => {
    try{
        const st = await  Stage.find();
        console.log(st);
        res.status(201).json(st);
    }
    catch(e)
    {
        res.json({ error: e.message });
    }
},
showAvailableStage : async (req, res) => {
try {
    let st =  Stage.find({available : true});
    res.status(201).json(st);
}
catch(e)
{
    res.json({ error: e.message });
}
},
updateStage: async (req, res) => {
    const {Type,description,dateDeb ,dateFin,encadreur,group,promoteur} = req.body,
        id = req.params.id,
        prom = await Promoteur.findOne({name : new RegExp(promoteur,"i")}),
        enc = await Encadreur.findOne({name : new RegExp(encadreur,"i")}),
        grp = await Group.findOne({name : new RegExp(group,"i")});
    try {
        const st = await Stage.findById(id);
        st.Type = Type ? Type : st.Type;
        st.description = description ? description : st.description;
        st.dateDeb = dateDeb ? dateDeb : st.dateDeb;
        st.encadreur = enc ? enc : st.encadreur;
        st.group = grp ? grp : st.group;
        st.promoteur = prom ? prom : st.promoteur;
        await st.save();
        res.status(201).send(st);
    } catch (e) {
        res.json({ error: e.message });
    }
},
deleteStage: async (req, res) => {
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