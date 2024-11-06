import express from "express";
import cors from "cors";
import productRoute from "./routes/productRoute.js";

const app = express();
app.use(cors());
app.use(express.json());

// Rotas
app.use("/api", productRoute);

// Porta do servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
