const express = require('express');
const route = express.Router();
const todoRoutes = require('./todo-route');

route.get("/", (req, res) => {
    res.json({
        message: "Selamat datang di server"
    });
});

route.use('/todos', todoRoutes)

module.exports = route;