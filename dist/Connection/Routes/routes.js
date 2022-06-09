"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _controlador = require("../Controllers/controlador.js");

var router = (0, _express.Router)();
var books = [];
router.get("/", function (req, res) {
  console.log("Conectado");
});
router.get("/", function (req, res) {
  res.render('Mostrar.ejs', {
    books: books
  });
});
router.post("/Mandar", _controlador.verInformacion, function (req, res) {
  var palabra = req.body.palabra;

  _controlador.verInformacion.push(palabra);
});
router.post("/MandarInfo", _controlador.AltaInformacion, function (req, res) {
  var _req$body = req.body,
      letra = _req$body.letra,
      palabra = _req$body.palabra,
      significado = _req$body.significado,
      imagen = _req$body.imagen;

  if (!letra || !palabra || !significado || !imagen) {
    res.status(400).send("Faltan campos");
    return;
  }

  var newInfo = {
    letra: letra,
    palabra: palabra,
    significado: significado,
    imagen: imagen
  };
  console.log(newInfo);

  _controlador.AltaInformacion.push(newInfo);

  res.render("/MandarInfo");
});
router.get("/Servidor/MostrarUsuarios/:Id", _controlador.verUsuarios); //GET = Obtener información

router.post("/Servidor", _controlador.AltaUsuario);
router.get("/Servidor/count", _controlador.ContarUsuario);
router.get("/Servidor/:Id", _controlador.EncontrarUsuario);
router["delete"]("/Servidor/:Id", _controlador.EliminarUsuario);
router.put("/Servidor/:CorreoE", _controlador.ActualizarUsuarios);
var _default = router;
exports["default"] = _default;