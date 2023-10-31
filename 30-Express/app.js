const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({
        message: "Selamat datang di server express"
    });
});

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});