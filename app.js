import express from "express";
import routes from './routes/routes.js';
import db from './db/db.js';

const app = express();

app.use(express.json());
app.use(routes);

db.sync()
.then(console.log("Connexion à la base de données"))
.catch(error => console.log(error));

app.listen(8080, () => console.log("Port 8080"));