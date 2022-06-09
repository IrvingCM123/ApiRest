import { Router } from "express";
import {
  verUsuarios,
  AltaUsuario,
  EncontrarUsuario,
  EliminarUsuario,
  ContarUsuario,
  ActualizarUsuarios,
  AltaInformacion,
  verInformacion,
} from "../Controllers/controlador.js";

const router = Router();

router.get("/", function (req, res) {
  console.log("Conectado")
});

router.get("/Servidor/MostrarUsuarios/", verUsuarios);

router.post("/Servidor/EncontrarUsuario/:Id", EncontrarUsuario);

router.get("/Servidor/ContarUsuarios", ContarUsuario);

router.post("/Servidor/AltaInfo", AltaInformacion)

router.post("/Servidor/RegistrarUsuarios", AltaUsuario);

router.delete("/Servidor/EliminarUsuario/:Id", EliminarUsuario);

router.put("/Servidor/:CorreoE", ActualizarUsuarios);
 
export default router;
