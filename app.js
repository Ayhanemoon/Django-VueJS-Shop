const express = require('express');
const cors = require("cors");

const app = express();
const port = process.env.PORT;

// CORS 
var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// sync DBase
const db = require('./models');
const Role = db.Role;
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}

// routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

app.get('/',(req, res) => {
    res.send("hello");
});

app.listen(port, () => {
    console.log(`App is listening on http://localhost:${port}`);
});