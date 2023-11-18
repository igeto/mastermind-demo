import { IDriver } from '../interfaces/mongoose/driver.document';

/**
 * @swagger
 * definitions:
 *  DriverDto:
 *      type: object
 *      properties:
 *          driver:
 *              type: string
 *          location:
 *              type: string
 *          coordinates:
 *              schema:
 *                  type: array
 *                  items:
 *                      - 40.77371
 *                      - -73.96614
 *              type: array
 *          timestamp:
 *              type: number
 * */
export class DriverDto {
    driver: string
    location: string
    coordinates: number[]
    timestamp: number
    constructor(driverDocument: IDriver) {
        this.driver = driverDocument.driver;
        this.location = driverDocument.location
        this.coordinates = driverDocument.coordinates.coordinates.reverse();
        this.timestamp = driverDocument.timestamp;

    }
}