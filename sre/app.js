const express = require('express');

const app = express();

app.get('/health', (req, res) => {
    res.status(200).send('Healthy service');  
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);  
});