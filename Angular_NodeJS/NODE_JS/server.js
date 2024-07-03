const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");

const app = express();

// app.use(cors());
app.use(
    cors({
      credentials: true,
      origin: ["http://localhost:4200"],
    })
  );

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

app.use(
    cookieSession({
        name:"david-session",
        //keys:["COOKIE_SECRET"], // should use as secret environment variable
        secret: "COOKIE_SECRET",
        httpOnly: true
    })
);

//simple route
app.get("/",(req,res)=>{
    res.json({message: "Welcome to David App"})
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

//set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
});

const db = require("./app/models");
const Role = db.role;

db.sequelize.sync({force:true}).then(()=> {
    console.log("drop and resync DB");
    initial();
});


function initial() {
    Role.create({
        id:1,
        name:'user'
    });

    Role.create({
        id:2,
        name:'moderator'
    });

    Role.create({
        id:3,
        name:'admin'
    });
}