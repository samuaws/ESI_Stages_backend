const express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    user = require("./models/user"),
    userRouter = require("./routes/user"),
     authRouter = require("./routes/auth"),
    
    port=3000;

    app.use(express.json());
    app.get("/",(req,res)=>{
        res.send("just cheking that this is working");
    })
     app.use("/",authRouter);
     app.use("/users", userRouter);
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
    



