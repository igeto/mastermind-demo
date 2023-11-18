import express, { Request, Response } from 'express';
import driverController from '../controllers/driver/driver.controller';
import { wrapAsyncError } from '../helpers/express'

const router = express.Router();

/**
 * @swagger
 * /locations/driver/{driver}/day/{day}:
 *  get:
 *      tags:
 *        - Drivers
 *      summary: Returns driver details for a specific day
 *      produces:
 *          - application/json
 *      parameters:
 *          - in: path
 *            name: driver
 *            required: true
 *            type: string
 *          - in: path
 *            name: day
 *            required: true
 *            type: string
 *      consumes:
 *          - application/json
 *      responses:
 *          '200':
 *              description: Array of driver entries for each location visited during the given day
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/definitions/DriverDto'
 */
router.get('/locations/driver/:driver/day/:day', wrapAsyncError(driverController.driverLocationsForDayRoute));

/**
 * @swagger
 * /search-location-visitors:
 *  post:
 *      tags:
 *        - Drivers
 *      summary: Returns driver pass bys for a specified time period on a specified location
 *      produces:
 *          - application/json
 *      parameters:
 *          - in: body
 *            name: searchParameters
 *            schema:
 *              type: object
 *              properties:
 *                  location:
 *                      type: string
 *                      example: "Central Park"
 *                  startDate:
 *                      type: string
 *                      example: "2023-10-01"
 *                  endDate:
 *                      type: string
 *                      example: "2023-10-01"
 *                  exact:
 *                      type: boolean
 *                      example: false
 *      consumes:
 *          - application/json
 *      responses:
 *          '200':
 *              description: Array of driver entries for each location visited during the given day
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/definitions/DriverDto'
 */
router.post('/search-location-visitors', wrapAsyncError(driverController.driverPassBysForPeriodRoute));

/**
 * @swagger
 * /delete-locations/driver/{driver}:
 *  post:
 *      tags:
 *        - Drivers
 *      summary: Will delete drivers locations, if startDate and endDate are provided in a body it will delete locations on between that period
 *      produces:
 *          - application/json
 *      parameters:
 *          - in: path
 *            name: driver
 *            required: true
 *            type: string
 *          - in: body
 *            name: searchParameters
 *            schema:
 *              type: object
 *              properties:
 *                  startTime:
 *                      type: string
 *                      example: "2023-10-01"
 *                  endTime:
 *                      type: string
 *                      example: "2023-10-01"
 *      consumes:
 *          - application/json
 *      responses:
 *          '200':
 *              description: A message indicating the number of deleted entries
 */
router.post('/delete-locations/driver/:driver', wrapAsyncError(driverController.deleteDriverLocationRoute));

/**
 * @swagger
 * /search/proximity:
 *  post:
 *      tags:
 *        - Drivers
 *      summary: Will find close by drivers for a location withing a given radius, at a given time period
 *      produces:
 *          - application/json
 *      parameters:
 *          - in: body
 *            name: searchParameters
 *            schema:
 *              type: object
 *              properties:
 *                  latitude:
 *                      type: number
 *                      example: 40.77371
 *                  longitude:
 *                      type: number
 *                      example: -73.96614
 *                  radius:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              distance:
 *                                  type: number
 *                                  example: 5
 *                              units:
 *                                  type: string
 *                                  enum:
 *                                      - m
 *                                      - km
 *                  startTime:
 *                      type: string
 *                      example: "2023-10-01"
 *                  endTime:
 *                      type: string
 *                      example: "2023-10-01"
 *      consumes:
 *          - application/json
 *      responses:
 *          '200':
 *              description: A message indicating the number of deleted entries
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/definitions/DriverDto'
 */
router.post('/search/proximity', wrapAsyncError(driverController.searchByProximityRoute));

export default router;
