const express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    user = require("./models/user"),
    userRouter = require("./routes/user"),
    authRouter = require("./routes/auth"),
    stageRouter = require("./routes/stage"),
    encadreurRouter = require("./routes/encadreur"),
    promoteurRouter = require("./routes/promoteur"),
    entrepriseRouter = require("./routes/entreprise"),
    groupRouter = require("./routes/group"),
    cors =require("cors"),
    port=3000;

    app.use(express.json());
    app.use(
        cors({
            origin : "*"
        })
    )
    app.get("/lydia",(req,res)=>{
        res.send("just cheking that this is working");
    })
     app.use("/",authRouter);
     app.use("/users", userRouter);
     app.use("/stage", stageRouter);
     app.use("/encadreur", encadreurRouter);
    app.use("/promoteur", promoteurRouter);
    app.use("/entreprise", entrepriseRouter);
    app.use("/group", groupRouter);
     mongoose.set("debug", true); // in devolpment process
    mongoose
    .connect(
        "mongodb+srv://samuaws:yM2tSpmnnsdH8aT@stagedb.vamrg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",        {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "stagesAPI",
    })
    .then((con) => {
        console.log("Database is connected");
        app.listen(port, () => {
            console.log(`Server started on ${port}`);
        });
    })
    .catch((err) => {
        console.error(err);
    });
    



