import { logger } from './utils/logger.js';
import express from 'express';
import { metricsMiddleware } from './utils/metrics.js'

const app = express();

app.use(metricsMiddleware)

app.get('/health', (req, res) => {
    logger.info('The application is healthy');

    res.status(200).send('Healthy service');  
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);  
});