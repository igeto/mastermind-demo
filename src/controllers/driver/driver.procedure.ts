import DriverMongoose from "../../models/driver.mongoose";

export const driverProcedures = {
    async getDriverLocationsForDay(driver: string, startOfDay: number, endOfDay: number) {
        return DriverMongoose.find({
            driver: {$regex: driver, $options: 'i'},
            timestamp: {
                $gte: startOfDay,
                $lte: endOfDay
            }
        }).sort('timestamp');
    },

    async getDriverPassBysForPeriod(location: string, startDate: number, endDate: number, exact: boolean) {
        const query = {
            location: exact ? {$regex: `^${location}$`, $options: 'im'} : {$regex: location, $options: 'i'},
            timestamp: {
                $gte: startDate,
                $lte: endDate
            }
        }
        return DriverMongoose.find(query);
    },

    async deleteDriverLocations(driver: string, startTime?: number | undefined, endTime?: number | undefined) {
        let query = {
            driver: {$regex: driver, $options: 'i'}
        }

        if (startTime && endTime) {
            const timestamp = {
                $gte: startTime,
                $lte: endTime
            };
            query = {...query, ...timestamp }
        }

        return DriverMongoose.deleteMany(query);
    },

    async getCloseByDrivers(lat: number, long: number, radius: any = {}, startTime: number, endTime: number) {
        const { distance, units } = radius;
        const radiusInMeters = units.toLowerCase() === 'km' ? distance * 1000 : distance;

        return DriverMongoose.find({
            timestamp: {
                $gte: startTime,
                $lte: endTime
            },
            'coordinates.coordinates': {
                $nearSphere: {
                    $geometry: {
                        type: "Point",
                        coordinates: [long, lat]
                    },
                    $maxDistance: radiusInMeters
                }
            }
        });
    }
}

export default driverProcedures;
