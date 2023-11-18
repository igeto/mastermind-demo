import dotenv from 'dotenv';

import server from './config/server';
import connectToDatabase from './db/database';
import routes from './routes';
import errorHandler from "./middlewares/error";

import { HttpRequest, HttpResponse, HttpNext } from './types'
import constants from './constants';

const { server: { port } } = constants;
dotenv.config();

const app = server(); /* Will create an (express) app with all initial setup */
// Connect to the database
connectToDatabase();

// Register routes
app.use('/api/exposed', routes);

// Default route for handling unavailable endpoints
app.use((req: HttpRequest, res: HttpResponse) => {
    res.status(404).send('Endpoint not found');
});

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || port;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;
