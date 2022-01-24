const Promoteur = require("../models/promoteur");

module.exports = {

    createPromoteur : async (req, res) => {
        const {first_Name ,last_Name,email ,domaine,discription,Available} = req.body;
        try {
            let promoteur = await Promoteur.create({first_Name ,last_Name,email ,domaine,discription,Available});
            promoteur.save();
            res.status(201).json(Promoteur);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    showPromoteur : async (req,res) => {
        id = req.params.id ;
        try{
            const p = await Promoteur.findById(id);
            console.log(p);
            res.status(201).json(p);
        }
        catch(e)
        {
            res.json({ error: e.message });
        }
    },

    showListPomotreur: async (req,res) => {
        try{
            const p =await  Promoteur.find();
            res.status(201).json(p);
        }
        catch(e)
        {
            res.json({ error: e.message });
        }
    },
    showAvailablePromoteur : async (req, res) => {
        try {
            let p = await Promoteur.find({available : true});
            res.status(201).json(p)
        }
        catch(e)
        {
            res.json({ error: e.message });
        }
        },
    updatePromoteur: async (req, res) => {
        const { first_Name ,last_Name,email ,domaine,discription,Available } = req.body,
        id = req.params.id;
        console.log(id);
        try {
            const p = await Promoteur.findById(id);
            console.log(p);
            p.first_Name = first_Name ? first_Name : p.first_Name;
            p.last_Name = last_Name ? last_Name : p.last_Name;
            p.email = email ? email : p.email;
            p.domaine = domaine ? domaine : p.domaine;
            p.discription = discription ? discription : p.discription;
            p.Available = Available ? Available : p.Available;
            await p.save();
            res.status(201).send(p);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    deletePromoteur: async (req, res) => {
        try {
            const id = req.params.id,
                p = await Promoteur.findById(id);
            await p.remove();
            res.json({ deleted: "successfully" });
        } catch (e) {
            res.json({ error: e.message });
        }
    },
};

    
    