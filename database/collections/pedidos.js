const mongoose = require("./connect");
//userchema nombre aleatorio
var PEDIDOSSCHEMA ={
    nombre:                String,
    precio:                Number,
    descripcion:           String,
    fechaderegistro:       Date,
    fotografiadelproducto: String

}
//aqui se define el esquema
const PEDIDOS = mongoose.model("pedidos", PEDIDOSSCHEMA);
module.exports = PEDIDOS;