import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';

import swaggerSpec from '../api-doc/swagger-definition';
import constants from '../constants';
import { HttpRequest, HttpResponse } from '../types'

const { server: {baseUrl, swaggerUrl }} = constants;

/* Load environment variables */
dotenv.config();

/**
 * @description Receives express router and adds initial setup like cors, headers, parsers etc...
 *
 * @returns {Object} express app
 */
const server = () => {

    const app = express(); /* creates express app */
    app.use(helmet()); /* express header protection */
    app.use(cors()); /* allow cross-origin resource sharing */
    app.use(express.json()); /* express middleware for parsing JSON */
    app.use(express.urlencoded({ extended: true })); /* express middleware for parsing URL-encoded bodies */

    // route to get the swagger json file
    app.get('/swagger.json', (req: HttpRequest, res: HttpResponse) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });
    app.get('/', (req: HttpRequest, res: HttpResponse) => {
        res.send({ status: "service is up..." });
    });
    app.use(`${baseUrl}${swaggerUrl}`, swaggerUi.serve, swaggerUi.setup(swaggerSpec)); /* bind swagger ui with our swagger spec */

    return app;

};

export default server
