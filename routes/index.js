var express         = require('express');
const USER          = require('../database/user');
const RESTAURANTE   = require('../database/restaurante');
const PEDIDOS     = require('../database/pedidos');
const ORDEN       = require('../database/orden');
const MENU        = require('../database/menu');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({
    msn: "BIENVENIDOS A LA API FASTCHARMING"
  })
});

router.post('user', async(req, res) => {
  var params = req.body;
  //validar datos
  
  params["register"] = new Date();
  var user = new USER(params);
  var result = await user.save();
  res.status(200).json(result);
});
//***********************restaurante******************** */
router.post('/restaurante', (req, res) => {

});

//***********************pedidos******************** *

router.post('/pedidoscliente', (req, res) => {

});
//***********************orden******************** */
router.post('/orden', (req, res) => {

});
//***********************menu******************** */
router.post('/menu', (req, res) => {

});
module.exports = router;
