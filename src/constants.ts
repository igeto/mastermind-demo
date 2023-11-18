const constants = Object.freeze({
    server: Object.freeze({
        port: 3000,
        baseUrl: '/api/exposed',
        swaggerUrl: '/api-docs'
    }),
    http:   Object.freeze({

        // 200s
        ok:         200,
        created:    201,
        accepted:   202,
        noAuthInfo: 203,
        noContent:  204,

        // 400s
        badRequest:   400,
        unauthorized: 401,
        forbidden:    403,
        notFound:     404,
        conflict:     409,
        deprecated:   410,
        semantic:     422,

        // 500s
        server:        500,
        unimplemented: 501,
        unavailable:   503
    }),
    types: Object.freeze({
        OBJECT: 'object',
        STRING: 'string',
        NUMBER: 'number',
        BOOLEAN: 'boolean',
        DATE: 'date',
        FUNCTION: 'function',
        EMPTY: '',
        NULL: null,
        UNDEFINED: 'undefined'
    }),
    errorMessages: {
        invalidTypes: {
            number: 'Invalid type - must be number',
            boolean: 'Invalid type - must be boolean',
            date: 'Invalid type - must be date',
            string: 'Invalid type - must be string',
            enum: 'Invalid enum type',
            accountType: 'Invalid account type',
            dateType: 'Invalid date type'
        },
        dateRangeValidation: 'End date must be greater than start date',
        required: 'required field'
    }
});

export default constants;
