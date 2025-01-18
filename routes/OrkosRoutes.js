// Importación de dependencias y controladores
import express from "express";
import {
  getOrko,
  postOrko,
  getOrkoId,
  getOrkoNombre,
  patchOrko,
  inactivarOrko,
  deleteOrko,
} from "../controllers/OrkosController";

const router = express.Router();

// Ruta raíz para la API
router.get("/", (req, res) => {
  res.send("Bienvenido a la API de Orkos. Usa /orko para acceder a los Orkos.");
});

// Definición de rutas para el CRUD de orkos
router.get("/orko", getOrko);
router.post("/orko", postOrko);
router.get("/orko/:id", getOrkoId);
router.get("/buscar/:nombre", getOrkoNombre);
router.patch("/orko/:id", patchOrko);
router.patch("/orko/:id/inactivar", inactivarOrko);
router.delete("/orko/:id", deleteOrko);

export default router;
