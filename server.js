const express = require("express")
const routes = require('./routes')

const PORT = process.env.port || 3001;

const app = express();

//middleware to parse json 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//static files from public directory
app.use(express.static('public'));

//defined routes used
app.use(routes);

// starts server
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}.`)
);
