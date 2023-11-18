import driverProcedures from './driver.procedure';
import { parseDate, getStartAndEndOfDay, createRedisKey } from '../../helpers/util';
import { HttpRequest, HttpResponse } from '../../types'
import constants from '../../constants';
import { DriverDto } from '../../models/driver.dto';
import redisClient from '../../db/cache';

const { http } = constants;
const driverController = {

    driverLocationsForDayRoute: async (req: HttpRequest, res: HttpResponse) => {
        const { driver, day } = req.params;
        const cache = await redisClient();

        const parsedDay = parseDate(day);
        const { startOfDay, endOfDay } = getStartAndEndOfDay(parsedDay);

        const cacheKey = createRedisKey(driver, startOfDay, endOfDay);

        const cachedResult = await cache.get(cacheKey);
        if (cachedResult) {
            return res.status(http.ok).json({ fromCache: true,  result: JSON.parse(cachedResult) });
        }

        const locations = await driverProcedures.getDriverLocationsForDay(driver, startOfDay, endOfDay);

        const locationObjects: DriverDto[] = locations.map(o => new DriverDto(o));

        cache.setEx(cacheKey, 3600, JSON.stringify(locationObjects));

        return res.status(http.ok).json({ fromCache: false, result: locationObjects });
    },

    driverPassBysForPeriodRoute: async (req: HttpRequest, res: HttpResponse): Promise<any> => {
        const { location, startDate, endDate, exact = false } = req.body;
        const cache = await redisClient();

        const parsedStartDate = parseDate(startDate);
        const parsedEndDate = parseDate(endDate);
        const { startOfDay } = getStartAndEndOfDay(parsedStartDate);
        const { endOfDay } = getStartAndEndOfDay(parsedEndDate);

        const cacheKey = createRedisKey(location, startOfDay, endOfDay, exact);

        const cachedResult = await cache.get(cacheKey);
        if (cachedResult) {
            return res.status(http.ok).json({ fromCache: true,  result: JSON.parse(cachedResult) });
        }

        const visitors = await driverProcedures.getDriverPassBysForPeriod(location, startOfDay, endOfDay, exact);

        const visitorObjects: DriverDto[] = visitors.map(o => new DriverDto(o));

        cache.setEx(cacheKey, 3600, JSON.stringify({ fromCache: false, result: visitorObjects }));

        return res.status(http.ok).json({ fromCache: false, result: visitorObjects });

    },

    async deleteDriverLocationRoute(req: HttpRequest, res: HttpResponse): Promise<any> {
        const { driver } = req.params;
        const { startTime, endTime } = req.body;
        const deleted = await driverProcedures.deleteDriverLocations(driver, startTime, endTime);

        return res.status(http.ok).json(`Deleted ${deleted.deletedCount} entries.`);
    },

    async searchByProximityRoute(req: HttpRequest, res: HttpResponse) {
        const { latitude, longitude, radius, startTime, endTime } = req.body;
        const cache = await redisClient();

        const parsedStartDate = parseDate(startTime).getTime();
        const parsedEndDate = parseDate(endTime).getTime();

        const cacheKey = createRedisKey(latitude, longitude, radius, parsedStartDate, parsedEndDate);

        const cachedResult = await cache.get(cacheKey);
        if (cachedResult) {
            return res.status(http.ok).json({ fromCache: true,  result: JSON.parse(cachedResult) });
        }

        const driversCloseBy = await driverProcedures.getCloseByDrivers(
            latitude,
            longitude,
            radius,
            parsedStartDate,
            parsedEndDate
        );

        const closeByObjects: DriverDto[] = driversCloseBy.map(o => new DriverDto(o));

        cache.setEx(cacheKey, 3600, JSON.stringify(closeByObjects));

        return res.status(http.ok).json({ fromCache: false, result: closeByObjects });

    }
};

export default driverController;
