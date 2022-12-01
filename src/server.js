require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3002;
const clothesRouter = require('./routes/clothes');
const foodRouter = require('./routes/food');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

app.use(express.json());
app.use(cors());
app.use(clothesRouter);
app.use(foodRouter);

app.get('/', (req, res, next) => {
  res.status(200).send('Proof of life');
});

app.use('*', notFound);
app.use(errorHandler);

function start() {
  app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
}
module.exports = { start, app };