const Encadreur = require("../models/encadreur");
const Entreprise = require("../models/entreprise");
module.exports = {

    createEncadreur : async (req, res) => {
        const {first_Name ,last_Name,adrs ,tlf,entreprise} = req.body;
        try {
            let ent = await Entreprise.findOne({name : new RegExp(entreprise,"i")});
           if(ent == null)
           {
               throw Error("entreprise does not exist");
           }
            let encadreur = await Encadreur.create({first_Name ,last_Name,adrs ,tlf,entreprise : ent});
            ent.encadreurs.push(encadreur);
            encadreur.save();
            ent.save();
            res.status(201).json(encadreur);
        } catch (e) {
            
            res.json({ error: e.message });
            console.log(e);
        }
    },
    showEncadreur : async (req,res) => {
        id = req.params.id ;
        try{
            const en =await Encadreur.findById(id);
            res.status(201).json(en);
        }
        catch(e)
        {
            res.json({ error: e.message });
        }
    },

    showListEncadreur: async (req,res) => {
        try{
            const en =await Encadreur.find();
            res.status(201).json(en);
        }
        catch(e)
        {
            res.json({ error: e.message });
        }
    },
    updateEncadreur: async (req, res) => {
        const { first_Name, last_Name, tlf , entreprise } = req.body,
        ent =await Entreprise.findOne({name : new RegExp(entreprise,"i")});
            id = req.params.id;
        try {
            const en = await Encadreur.findById(id);
            en.first_Name = first_Name ? first_Name : en.first_Name;
            en.last_Name = last_Name ? last_Name : en.last_Name;
            en.tlf = tlf ? tlf : en.tlf;
            en.entreprise = ent ? ent : en.entreprise;
            await en.save();
            res.status(201).send(en);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    deleteEncadreur: async (req, res) => {
        try {
            const id = req.params.id,
                en = await Encadreur.findById(id);
            await en.remove();
            res.json({ deleted: "successfully" });
        } catch (e) {
            res.json({ error: e.message });
        }
    },
};

    
    