import express from "express";
import productsRouter from "../routes/productsRouter.js";
import cors from "cors";

const app = express();

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}

app.use(express.json(), cors(corsOptions), productsRouter);

app.get('/', (req, res) => {
    res.send('Olá world!');
});
  
export default app