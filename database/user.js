
const mongoose = require("./connect");
var USERSCHEMA = {
    name: String,
    email:String,
    password:String,
    register:Date, //este mantieene actualizado
    age:Number,
    sex: String
}
const USER = mongoose.model("user",USERSCHEMA);
module.exports = USER;