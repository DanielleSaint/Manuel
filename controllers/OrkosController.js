import Orko from '../models/OrkosModel';

const getOrko = async (req, res) => {
  try {
    const orkos = await Orko.find();
    res.json(orkos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const postOrko = async (req, res) => {
  try {
    const newOrko = new Orko(req.body);
    const savedOrko = await newOrko.save();
    res.status(201).json(savedOrko);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getOrkoId = async (req, res) => {
  try {
    const orko = await Orko.findById(req.params.id);
    if (!orko) {
      return res.status(404).json({ mensaje: "Orko no encontrado" });
    }
    res.json(orko);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOrkoNombre = async (req, res) => {
  try {
    const nombre = req.params.nombre; 
    const orkos = await Orko.find({ nombre: { $regex: nombre, $options: "i" } }); 

    if (!orkos || orkos.length === 0) {
      return res.status(404).json({ mensaje: "No se encontró Orko con ese nombre" });
    }

    res.json(orkos); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const patchOrko = async (req, res) => {
  try {
    const orkoActualizado = await Orko.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!orkoActualizado) {
      return res.status(404).json({ mensaje: "Orko no encontrado" });
    }
    res.json(orkoActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const inactivarOrko = async (req, res) => {
  try {
    const orkoInactivo = await Orko.findByIdAndUpdate(
      req.params.id,
      { estado: "Inactivo" },
      { new: true }
    );
    if (!orkoInactivo) {
      return res.status(404).json({ mensaje: "Orko no encontrado" });
    }
    res.json({ mensaje: "Orko inactivado", orko: orkoInactivo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteOrko = async (req, res) => {
  try {
    const orkoEliminado = await Orko.findByIdAndDelete(req.params.id);
    if (!orkoEliminado) {
      return res.status(404).json({ mensaje: "Orko no encontrado" });
    }
    res.json({
      mensaje: "Orko eliminado de manera correcta",
      orko: orkoEliminado,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export {
  getOrko,
  postOrko,
  getOrkoId,
  getOrkoNombre,
  patchOrko,
  inactivarOrko,
  deleteOrko,
};
