import { Document } from "mongoose";

export interface IDriver extends Document {
    driver: string;
    location: string;
    coordinates: {
        type: 'Point';
        coordinates: [number, number],
        index: string
    }
    timestamp: number;
}
