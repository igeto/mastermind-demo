import { HttpRequest, HttpResponse, HttpNext } from '../types';

const errorHandler = (error: any, _req: HttpRequest, res: HttpResponse, _next: HttpNext) => {
    // logError(error);
    res.status(500)
        .send({
            error: "Something went wrong",
            details: error
        });
};

export default errorHandler;