import "dotenv/config";
import app from "./src/config/app.js";

const PORT = process.env.PORT ?? 3000;
const SERVER_HOST = '0.0.0.0';

app.listen(PORT, SERVER_HOST, () => {
  console.log(`Example app listening on port http://${SERVER_HOST}:${PORT}`);
});