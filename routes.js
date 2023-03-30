const express = require("express");
const router = express.Router()

router.get("/", (req, res) => {
    res.send("<h1>Hello World!!!<h1>");
});

router.post("/", (req, res) => {
    console.log(req.body)
    res.send(req.body);
});

router.get('/name/:name', (req, res) => {
    res.send("The name is: " + req.params.name);
});

router.get('/greeting/', (req, res) => {
    res.send("My name is Thiago Simoes and my student ID is N01468775")
});

router.get('/add/:x/:y', (req, res) => {
    const x = parseInt(req.params.x);
    const y = parseInt(req.params.y);
    
    res.send(`The result is: ${x + y}`)
});

router.get('/calculate/:op/:a/:b', (req, res) => {

    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const op = req.params.op;
    var result = 0;

    if (op == 'add') {
        result = a + b;
    }
    else if (op == 'sub') {
        result = a - b;
    }
    else if (op == 'mul') {
        result = a * b;
    }
    else if (op == 'div') {
        result = a / b;
    }
    else if (op == 'pow') {
        result = a ** b;
    }

    res.send(`The result is: ${result}`);


})






module.exports = router;