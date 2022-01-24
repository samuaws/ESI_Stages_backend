const mongoose = require("mongoose"),
    jwt = require("jsonwebtoken"),
    bcrypt = require("bcrypt"),
    
    userSchema = new mongoose.Schema({
        email: {
            type: String,
           
        },
        username: {
            required: true,
            type: String,
            unique: true,
        },
        first_Name: {
            required: true,
            type: String,
        },
        last_Name: {
            required: true,
            type: String,
        },
        matricule: {
            required: true,
            type: Number,
        },
        is_Admin: {
            type: Boolean,
            default: false,
        },
        password: {
            type: String,
            required: true,
        },
        //  savedStages : { 
        //     type: mongoose.Types.ObjectId, 
        //     ref: "savedStages" ,
           
        // },

    });
    
    userSchema.pre("save", async function (next) {
        try {
            if (this.isModified("password")) this.password = await bcrypt.hash(this.password, 13);
            next();
        } catch (e) {
            next(e);
        }
    });
    userSchema.methods.comparePasswords = async function (passwordSent, next) {
        try {
            return await bcrypt.compare(passwordSent, this.password);
        } catch (e) {
            next(e);
        }
    };
    userSchema.methods.insertToken = function () {
        let user = this.toObject();
        delete user.password;
        user.token = jwt.sign(
            {
                id: user._id,
                first_Name: user.first_Name,
            },
            "gqekjgbqejkhbgkjhbgtjkb<jgbjuos<hjkg<sg<sg24sg54s54g",
            {
                expiresIn: "100h",
            }
        );
        return user;
    };
    module.exports = mongoose.model("user", userSchema);