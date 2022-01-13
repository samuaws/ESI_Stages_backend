const Stage = require("../models/stage");

module.exports = {

createStage : async (req, res) => {
    const { Type,description,dateDeb ,dateFin,encadreur,group,promoteur} = req.body;
    try {
       
        let stage = await Stage.create({ Type,description,dateDeb ,dateFin,encadreur,group,promoteur});
        stage.save();
        res.status(201).json(stage);
    } catch (e) {
        res.json({ error: e.message });
    }
},



}