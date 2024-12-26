const { required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

//username and password autometic save by passport-local-mongoose package
//so we don't need to define in userSchema

const userSchema = new Schema({
    email : {
        type : String,
        required:true
    }
});

//username, hashing, salting and hash password generate by below line
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User",userSchema);