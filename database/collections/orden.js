const mongoose = require("../connect");
var mon = require('mongoose');
var Schema = mon.Schema;
//userchema nombre aleatorio
var ORDENSCHEMA = new Schema({
    idnemu:        String,
    idrestorant:   String,
    cantidad:      Number,
    idcliente:     String,
    lat:           String, //lugar de envio
    long:          String, //lugar de envio
    pagototal:     Number

});
//aqui se define el esquema
const ORDEN = mongoose.model("orden", ORDENSCHEMA);
module.exports = ORDEN;