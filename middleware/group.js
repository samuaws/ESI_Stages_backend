const Group = require("../models/group");
const User = require("../models/user");
    module.exports = {
        createGroup : async (req, res) => {

            const {name,type,m1,m2,m3,m4} = req.body;
            console.log(name);
            try {
                
                let grp = await Group.create({name,type});
                if(m1){
                    const e1 = await User.findOne({matricule : m1});
                    grp.etudiants.push(e1);
                }
                if(m2){
                    const e2 = await User.findOne({matricule : m2});
                    grp.etudiants.push(e2);
                }
                if(m3){
                    const e3 = await User.findOne({matricule : m3});
                    grp.etudiants.push(e3);
                }
                
                if(m4){
                    const e4 = await User.findOne({matricule : m4});
                    grp.etudiants.push(e4);
                }
                grp.save();
              res.status(201).json(grp);
            } catch (e) {
                res.json({ error: e.message });
            }
        },
    



        showListGroup : async (req,res) => {
            try{
                const grp = await Group.find().populate("etudiants");
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
            const {name,type,m1,m2,m3,m4} = req.body,
                id = req.params.id;
            try {
                const grp = await Group.findById(id);
               grp.name =  name ? name : grp.name;
               grp.type = type ? type : grp.type;
               if(m1){
                const e1 = await User.findOne({matricule : m1});
                grp.etudiants[0]=e1;
            }
            if(m2){
                const e2 = await User.findOne({matricule : m2});
                grp.etudiants[2]=e2;
            }
            if(m3){
                const e3 = await User.findOne({matricule : m3});
                grp.etudiants[3]=e3;
            }
            
            if(m4){
                const e4 = await User.findOne({matricule : m4});
                grp.etudiants[3]=e4;
            }
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