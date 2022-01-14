const Encadreur = require("../models/encadreur");

module.exports = {

    createEncadreur : async (req, res) => {
        const {first_Name ,last_Name,adrs ,tlf,entreprise} = req.body;
        try {
           
            let Encadreur = await Encadreur.create({first_Name ,last_Name,adrs ,tlf,entreprise});
            Encadreur.save();
            res.status(201).json(Encadreur);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    //show jsp
    updateEncadreur: async (req, res) => {
        const { first_Name, last_Name, tlf , entreprise } = req.body,
            id = req.params.id;
        try {
            if (id.toString() !== req.Encadreur._id.toString())
                throw new Error("You aren't allowed to edit other Encadreur profiles.");
            const u = await Encadreur.findById(id);
            u.first_Name = first_Name ? first_Name : u.first_Name;//ida first_name existe donc nhatoha sinon nlkhelo l9dim ?
            u.last_Name = last_Name ? last_Name : u.last_Name;
            u.tlf = tlf ? tlf : u.tlf;
            u.entreprise = entreprise ? entreprise : u.entreprise;
            await u.save();
            res.status(201).send(u);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    deleteEncadreur: async (req, res) => {
        try {
            const id = req.params.id,
                u = await Encadreur.findById(id);
                console.log(u);
            if (u._id.toString() !== req.Encadreur._id.toString()){
                
                throw Error("You aren't allowed to delete other people accounts.");
            }
            await u.remove();
            res.json({ deleted: "successfully" });
        } catch (e) {
            res.json({ error: e.message });
        }
    },
};

    
    