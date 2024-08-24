import express from "express";
import productsRouter from "../routes/productsRouter.js";
const app = express();

app.use(express.json(), productsRouter);

app.get('/', (req, res) => {
    res.send('Olá world!');
});
  
export default app