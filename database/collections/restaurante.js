const mongoose = require("./connect");
var mon = require('mongoose');
var Schema = mon.Schema;
var RESTAURANTESCHEMA = new Schema({
    nombre:          String,
    nit:             String,
    propietario:     String,
    calle:           String,
    telefono:        String,
    log:             String,
    lat:             String,
    logo:            String,
    fechaderegistro: Date,
    fotolugar:       String

});
//aqui se define el esquema
const RESTAURANTE = mongoose.model("restaurante", RESTAURANTESCHEMA);
module.exports = RESTAURANTE;