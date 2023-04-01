require("dotenv").config();
import { engine } from 'express-handlebars';


const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = process.env.NODE_DOCKER_PORT || 8080;

const path = require('path');
const staticPath = path.join(__dirname, '/../public');
app.use(express.static(staticPath));

app.engine('handlebars', engine());
app.set('views', path.join(__dirname, 'views'));
// setup template engine
app.set('view engine', 'handlebars');
app.use(expressLayouts);
//


require('./routes/all')(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
