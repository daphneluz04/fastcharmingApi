const mongoose = require("./connect");
//userchema nombre aleatorio
var MENUSCHEMA ={
    nombre:                String,
    precio:                String,
    descripcion:           String,
    fechaderegistro:       String,
    fotografiadelproducto: String

}
//aqui se define el esquema
const MENU = mongoose.model("menu", MENUSCHEMA);
module.exports = MENU;