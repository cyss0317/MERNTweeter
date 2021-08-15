const express = require("express");
const app = express();

// mongodb + srv://admin:asdfasdf @mern.my4wh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

app.get("/", (req, res)=> {
    res.send("Heasdfsalloadsfgasgsw WahbodiOrld!");
})

const port = process.env.PORT || 5000;

app.listen(port, () => {console.log(`Listening on port ${port}`)})
