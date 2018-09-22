var express = require("express");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 5000;
var app = express();

app.use(bodyParser.json());

app.get("/dreamforce", function(req, res) {
    res.status(200).json({message: "Hello Dreamforce!!!"});
});

app.listen(PORT, function() {
    console.log("Listening on port " + PORT);
})