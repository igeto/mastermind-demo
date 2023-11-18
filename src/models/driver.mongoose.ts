import mongoose, { Schema } from 'mongoose';

import { IDriver } from '../interfaces/mongoose/driver.document';
import { isValidLongitude, isValidLatitude } from '../helpers/util';

/**
 * @swagger
 * definitions:
 *  IDriver:
 *      type: object
 *      properties:
 *          driver:
 *              type: string
 *          location:
 *              type: string
 *          coordinates:
 *              type: object
 *          timestamp:
 *              type: number
 * */
const driverSchema: Schema<IDriver> = new Schema({
    driver: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    coordinates: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true,
            validate: {
                validator: (value: number[]): boolean => {
                    return value.length === 2
                        && (
                            isValidLongitude(value[0])
                            && isValidLatitude(value[1])
                        );
                }
            }
        }
    },
    timestamp: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

driverSchema.index({'coordinates.coordinates': '2dsphere'});

// Create the model
const DriverMongoose = mongoose.model<IDriver>('DriverMongoose', driverSchema);

export default DriverMongoose;
