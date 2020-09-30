const mongoose = require("./connect");
//userchema nombre aleatorio
var mon = require('mongoose');
var Schema = mon.Schema;
var MENUSCHEMA = new Schema({
    idrestaurante: String,
    nombre:                String,
    precio:                Number,
    descripcion:           String,
    fechaderegistro:       Date,
    fotografiadelproducto: String

});
//aqui se define el esquema
const MENU = mongoose.model("menu", MENUSCHEMA);
module.exports = MENU;