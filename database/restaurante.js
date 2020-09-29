const mongoose = require("./connect");
var RESTAURANTESCHEMA = {
    nombre:         String,
    nit:            String,
    propietario:    String,
    calle:          String,
    telefono:       String,
    log:            String,
    lat:            String,
    logo:           String,
    fechaderegistro:String,
    fotolugar:      String

}
//aqui se define el esquema
const RESTAURANTE = mongoose.model("restaurante", RESTAURANTESCHEMA);
module.exports = RESTAURANTE;