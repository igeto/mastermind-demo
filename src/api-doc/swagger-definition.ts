import swaggerJSDoc from 'swagger-jsdoc';

import constants from '../constants';
import {config} from "dotenv";

const { swaggerUrls, ENV } = require('../constants');
const { server: { baseUrl } } = constants;

const swaggerDefinition = {
    info:                {
        title:       'Geo Location Swagger API',
        version:     '1.0.0',
        description: 'Endpoints to test Geo Location routes'
    },
    basePath:            `${baseUrl}/drivers`,
    // securityDefinitions: {
    //     APIKeyHeader: {
    //         type: 'apiKey',
    //         in:   'header',
    //         name: 'ng.login'
    //     }
    // },
    security:            [
        {
            APIKeyHeader: []
        }
    ]
};

const options = {
    swaggerDefinition,
    apis: [
        './dist/routes/*.router.js', /* paths */
        './dist/models/*.js' /* definitions */
    ]
};

export default swaggerJSDoc(options);
