const mongoose = require("./connect");
//userchema nombre aleatorio
var ORDENSCHEMA ={
    idnemu:        String,
    idrestorant:   String,
    cantidad:      String,
    idcliente:     String,
    lat:           String, //lugar de envio
    long:          String, //lugar de envio
    pagototal:     String

}
//aqui se define el esquema
const ORDEN = mongoose.model("orden", ORDENSCHEMA);
module.exports = ORDEN;