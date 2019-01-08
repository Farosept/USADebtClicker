var express = require("express"),
	app = express();
app.listen(3000,()=>{
	console.log("http://localhost:3000");
});
app.use(express.static(__dirname + "/View"));
app.use("/public",express.static(__dirname + "/public"));
app.get("/", (req, res)=>{
	res.sendFile("index.html");
});