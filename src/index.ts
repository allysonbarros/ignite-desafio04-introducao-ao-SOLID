import express from "express";

import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/users", usersRoutes);

export { app };
