const express = require('express');
const app = express();

const rootRoutes = require('./routes');

const PORT = process.env.PORT || 3000;


// Panggil Routes
app.use(rootRoutes);

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});