"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _controlador = require("../Controllers/controlador.js");

var router = (0, _express.Router)();
var books = []; // Enlazar páginas para navegar

router.get("/", function (req, res) {
  res.render("Index.ejs");
});
router.get("/Catalogo", function (req, res) {
  res.render("Catalogo.ejs");
});
router.get("/CajaComentario", function (req, res) {
  res.render("Comentarios.ejs");
});
router.get("/MandarInfo", function (req, res) {
  res.render("MandarIinfo.ejs");
});
router.get("/Glosario", function (req, res) {
  res.render("Glosario.ejs"), {
    newInfo: newInfo
  };
});
router.get("/Prueba", function (req, res) {
  res.render("Prueba.ejs");
});
router.get("/Mostrar", function (req, res) {
  res.render("Mostrar.ejs");
});
router.get("/Catalogo/Glosario", function (req, res) {
  res.render("Glosario_A.ejs");
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
router.get("/Servidor/MostrarUsuarios", _controlador.verUsuarios); //GET = Obtener información

router.post("/Servidor", _controlador.AltaUsuario);
router.get("/Servidor/count", _controlador.ContarUsuario);
router.get("/Servidor/:Id", _controlador.EncontrarUsuario);
router["delete"]("/Servidor/:Id", _controlador.EliminarUsuario);
router.put("/Servidor/:CorreoE", _controlador.ActualizarUsuarios);
var _default = router;
exports["default"] = _default;