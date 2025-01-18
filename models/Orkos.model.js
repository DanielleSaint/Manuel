import mongoose from "mongoose";

// Definición del esquema de la receta
const OrkosSchema = new mongoose.Schema({
  // Nombre de Orkos
  nombre: {
    type: String,
    required: true
  },
  color:{
    type: String,
    required: true
  },
  habilidades: {
    type: String,
    required: true
  },
  // Categoría de Orkos
  facciones: {
    type: String,
    required: false,
  },
  // Descripción de especialidades de Orkos
  descipcion: {
    type: String,
    required: false,
  },
  estado: {
    type: String,
    default: "Activa",
  },
  // URL de la imagen de Orko
  imagenUrl: {
    type: String,
    required: false,
    default: '',
  },
  // Fecha de creación de Orko
  fechaCreacion: {
    type: Date,
    default: Date.now,
  },
});

// Creación y exportación del modelo
const Orkos = mongoose.model("Orkos", OrkosSchema);
export default Orkos;
