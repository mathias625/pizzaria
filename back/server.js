require('dotenv').config();
const express = require('express');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const pedidoRoutes = require('./src/routes/pedido.routes');

app.use('/pedido', pedidoRoutes);


const pizzaRoutes = require('./src/routes/pizza.routes');

app.use('/pizza', pizzaRoutes);


const usuarioRoutes = require('./src/routes/usuario.routes');

app.use('/usuario', usuarioRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
