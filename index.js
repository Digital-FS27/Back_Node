require('dotenv').config();
const { app } = require('./src/config/app.js');

const PORT = process.env.PORT ?? 3000;
const SERVER_HOST = 'localhost';

app.listen(PORT, SERVER_HOST, () => {
  console.log(`Example app listening on port http://${SERVER_HOST}:${PORT}`);
});