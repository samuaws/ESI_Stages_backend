const Group = require("../models/group");
    module.exports = {
        createGroup : async (req, res) => {
            const {etudiants} = req.body;
            try {
                
                let grp = await Group.create({etudiants});
                grp.save();
                res.status(201).json(Grp);
            } catch (e) {
                res.json({ error: e.message });
            }
        },
    



        showListGroup : async (req,res) => {
            try{
                const grp = await Group.find();
                res.status(201).json(grp);
            }
            catch(e)
            {
                res.json({ error: e.message });
            }
        },
        showGroup: async (req,res) => {
            id = req.params.id ;
            try{
                const grp =await  Group.findById(id);
                res.status(201).json(grp);
            }
            catch(e)
            {
                res.json({ error: e.message });
            }
        },
        updateGroup : async (req, res) => {
            const {etudiants} = req.body,
                id = req.params.id;
            try {
                const grp = await Group.findById(id);
               grp.etudiants = etudiants;
               grp.save();
                res.status(201).send(grp);
            } catch (e) {
                res.json({ error: e.message });
            }
        },
         deleteGroup : async (req, res) => {
            try {
                const id = req.params.id,
                    grp = await Group.findById(id);             
                await grp.remove();
                res.json({ deleted: "successfully" });
            } catch (e) {
                res.json({ error: e.message });
            }
        },

    }