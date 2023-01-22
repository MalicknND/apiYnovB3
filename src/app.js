const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); //permet de parser tous les modules
const apiRouter = require('./routes/index');

require('dotenv').config(); //on le met aprés avoir fait npm i dotenv pour importer le .env

app.use(bodyParser.json());

// DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false)
mongoose.set('strictQuery', true);
//conexion à la base de données
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@freelance.dprdnqv.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log('Successfully connect to database');
  })
  .catch((err) => console.log(err));

app.use('/api/v1/', apiRouter);

app.listen(process.env.PORT, () => {
  console.log('Vous êtes connecté');
});
