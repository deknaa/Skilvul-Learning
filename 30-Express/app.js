const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

let todos = [
    {
        id: 1, value: "Belajar Express",
        id: 2, value: "Belajar ReactJS",
        id: 3, value: "Belajar buat API"
    }
]

app.get("/", (req, res) => {
    res.json({
        message: "Selamat datang di server express"
    });
});

app.get("/todos", (req, res) => {
    res.status(200).json({
        message: "Berhasil mendapatkan data todos",
        data: todos
    })
});

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});