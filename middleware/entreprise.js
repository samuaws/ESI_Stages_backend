const Entreprise = require("../models/entreprise");
const Encadreur = require("../models/encadreur");

module.exports = {

    createEntreprise : async (req, res) => {
        const {name ,adresse,ville} = req.body;
        try {
            let entreprise = await Entreprise.create({name ,adresse,ville});
            entreprise.save();
            res.status(201).json(entreprise);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    showEntreprise : async (req,res) => {
        id = req.params.id ;
        console.log(id);
        try{
            const ent = await Entreprise.findById(id);
            res.status(201).json(ent);
        }
        catch(e)
        {
            res.json({ error: e.message });
        }
    },

    showListEntreprise: async (req,res) => {
        try{
            const ent = await Entreprise.find();
            res.status(201).json(ent);
        }
        catch(e)
        {
            res.json({ error: e.message });
        }
    },
    updateEntreprise: async (req, res) => {
        const {name ,adresse,ville} = req.body,
            id = req.params.id;
           
        try {
            ent.name = name ? name : ent.name;
            ent.adresse = adresse ? adresse : ent.adresse;
            ent.ville = ville ? ville : ent.ville;
            await ent.save();
            res.status(201).send(ent);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    deleteEntreprise: async (req, res) => {
        try {
            const id = req.params.id,
                ent = await Entreprise.findById(id);
            await ent.remove();
            res.json({ deleted: "successfully" });
        } catch (e) {
            res.json({ error: e.message });
        }
    },
}