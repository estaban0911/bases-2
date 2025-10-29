const express = require("express");
const parser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = 3000;

// Configurar EJS
app.set("view engine", "ejs");

// Importar rutas
const articuloRoutes = require("./src/routes/articulo");

// Middleware
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());
app.use(express.json());

// Rutas API
app.use("/api", articuloRoutes);

// Importar modelo de artículo
const Articulo = require("./src/models/articulo");

// Ruta principal para mostrar artículos
app.get("/", async (req, res) => {
  try {
    const articulos = await Articulo.find();
    res.render("index", { articulos });
  } catch (error) {
    res.status(500).send("Error al cargar los artículos");
  }
});

// Conexión a la base de datos
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Conexión a MongoDB exitosa"))
  .catch((error) => console.log("❌ Error de conexión:", error));

// Iniciar servidor
app.listen(port, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});
