const express = require("express");
const routes = require("./routes.js")
const app = express();

app.use(express.urlencoded({extend: true}));
app.use(express.json());
app.use("/", routes)



app.listen(8000, () => (console.log("Server Running...")));