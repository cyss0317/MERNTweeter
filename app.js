const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users")
const tweets = require("./routes/api/tweets")
const bodyParser = require('body-parser');
const passport = require('passport');

app.use(passport.initialize());

mongoose
.connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Connected to mongoDB") )
.catch( err => console.log(err));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
}));
// require('./config/passport')(passport);


app.use("/api/users", users);
app.use("/api/tweets", tweets);

const port = process.env.PORT || 5000;

app.listen(port, () => {console.log(`Listening on port ${port}`)})
