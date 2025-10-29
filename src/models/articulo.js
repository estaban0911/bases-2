const mongoose = require("mongoose");

// Definición del esquema para los artículos
const articuloSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    autores: {
        type: [String],
        required: true
    },
    anio_publicacion: {        // sin tilde para evitar errores en MongoDB
        type: Number,
        required: true
    },
    resumen: {
        type: String
    },
    cantidad_referencias: {
        type: Number
    },
    base_datos: {
        type: String
    },
    revista: {
        type: String
    },
    enlace: {
        type: String
    },
    pdf: {
        type: String
    }
});

// Exportar el modelo
module.exports = mongoose.model("Articulo", articuloSchema);
