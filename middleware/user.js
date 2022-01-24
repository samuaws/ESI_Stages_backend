const User = require("../models/user"),
jwt = require("jsonwebtoken");
//Saved = require("../models/savedStages ");
module.exports = {
    createUser: async (req, res) => {
        const { email, username, first_Name, last_Name, password } = req.body;
        try {
           
            let user = await User.create({ email, username, first_Name, last_Name,matricule, password});
            // saving = await Saved.create({user});
            // user = await User.findById(user.id);
           
            // user.savedQuotes =saving;
            user.save();
           // saving.save();
          
          //  console.log(user.savedQuotes);

            res.status(201).json(user.insertToken());
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    logUser: async (req, res) => {
        console.log(req.body);
        const { username, password } = req.body;
        try {
            const user = await User.findOne({ username });
            if (!user) throw new Error("We didn't find any user with this username : " + username);
            if (!(await user.comparePasswords(password)))
                 throw Error("Wrong Password,Try again !!");
               
            res.status(201).json(user.insertToken());
           console.log("user loged in");
        } catch (e) {
            res.status(403).json({ error: e.message });
        }
    },
    showUser: async (req, res) => {
        const id = req.params.id;
        try {
            const user = await User.findById(id).select({ passwords: 0 }).select({"password" : 0,"_id": 0}); //.select( "-passwords" ); gotta add .populate("savedStages") later
            res.json(user);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    showUserByToken : async (req, res) => {
        
        try {
            res.status(201).json(req.user);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    updateUser: async (req, res) => {
        const { email,first_Name, last_Name,matricule, password } = req.body,
            id = req.params.id;
        try {
            if (id.toString() !== req.user._id.toString())
                throw new Error("You aren't allowed to edit other users profiles.");
            const u = await User.findById(id);
            u.email = email ? email : u.email;
            u.first_Name = first_Name ? first_Name : u.first_Name;
            u.last_Name = last_Name ? last_Name : u.last_Name;
            u.matricule = matricule ? matricule : u.matricule;
            u.password = password ? password : u.password;
            await u.save();
            res.status(201).send(u);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    userToAdmin: async (req, res) => {
        const id = req.params.id;
        try {
            const u = await User.findById(id);
            u.is_Admin = true;
            await u.save();
            // add published games
            res.status(201).send(u);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    deleteUser: async (req, res) => {
        try {
            const id = req.params.id,
                u = await User.findById(id);
                console.log(u);
            if (u._id.toString() !== req.user._id.toString()){
                
                throw Error("You aren't allowed to delete other people accounts.");
            }
            await u.remove();
            res.json({ deleted: "successfully" });
        } catch (e) {
            res.json({ error: e.message });
        }
    },
};
