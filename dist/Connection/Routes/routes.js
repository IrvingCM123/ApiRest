"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _controlador = require("../Controllers/controlador.js");

var router = (0, _express.Router)();
router.get("/", function (req, res) {
  console.log("Conectado");
});
router.get('/hola', function (peticion, respuesta) {
  var mascota = {
    nombre: "Maggie",
    edad: 2
  };
  respuesta.json(mascota);
});
router.get("/Servidor/MostrarUsuarios/", _controlador.verUsuarios);
router.post("/Servidor/EncontrarUsuario/:Id", _controlador.EncontrarUsuario);
router.post("/Servidor/enviar", _controlador.enviarCorreo);
router.get("/Servidor/ContarUsuarios", _controlador.ContarUsuario);
router.post("/Servidor/AltaInfo", _controlador.AltaInformacion);
router.post("/Servidor/RegistrarUsuarios", _controlador.AltaUsuario);
router["delete"]("/Servidor/EliminarUsuario/:Id", _controlador.EliminarUsuario);
router.put("/Servidor/:CorreoE", _controlador.ActualizarUsuarios);
var _default = router;
exports["default"] = _default;