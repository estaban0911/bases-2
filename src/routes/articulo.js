const express = require('express');
const router = express.Router();
const Articulo = require('../models/articulo');

// 📤 Ruta para agregar un artículo
router.post('/articulos', async (req, res) => {
    try {
        const nuevoArticulo = new Articulo(req.body);
        const articuloGuardado = await nuevoArticulo.save();
        res.status(201).json({
            message: "✅ Artículo guardado correctamente",
            data: articuloGuardado
        });
    } catch (error) {
        res.status(500).json({
            message: "❌ Error al guardar el artículo",
            error: error.message
        });
    }
});

// 📥 Ruta para obtener todos los artículos
router.get('/articulos', async (req, res) => {
    try {
        const articulos = await Articulo.find();
        res.status(200).json(articulos);
    } catch (error) {
        res.status(500).json({ message: "❌ Error al obtener los artículos" });
    }
});

module.exports = router;
