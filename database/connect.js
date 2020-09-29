const mongose = require("mongoose");
mongose.connect("mongodb://192.168.16.2/27017/fastcharming");
module.exports = mongose;