const express = require("express"),
        app=express(),
        path = require("path");
app.listen(8080);   
app.use(express.static(__dirname + '/View'));
app.use("/public",express.static(__dirname + '/public'));
app.get("/",(req, res)=>{
    res.sendFile("index.html");
});