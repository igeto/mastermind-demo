import constants from '../constants';
import { Options } from '../interfaces/validator/options'

const { errorMessages: {
    invalidTypes, dateRangeValidation, required },
    types } = constants;

/**
 * @description Receives the errors object and returns the count of its properties, returns the number of errors, 0 meaning no errors
 * @param obj
 * @returns {number}
 */
export const hasErrors = (obj: object): boolean => !!Object.keys(obj).length;

export const voidTypes = [types.EMPTY, types.NULL, types.UNDEFINED];

export const isDate = (value: Date) => !isNaN(value.getTime());

export const parseDate = (date: string | number) => {
    const parsedDate = new Date(date);
    if (isDate(parsedDate)) {
        return parsedDate;
    }
    throw new Error(invalidTypes.dateType);
}

export const getStartAndEndOfDay = (day: Date) => {
    const startOfDay = day.setHours(0, 0, 0, 0);
    const endOfDay = day.setHours(23, 59, 59, 999);
    return { startOfDay, endOfDay };
}

export const isValidLatitude = (lat: any): boolean =>
    typeof lat === 'number' && lat <= 90 && lat >= -90;

export const isValidLongitude = (long: any): boolean =>
    typeof long === 'number' && long <= 180 && long >= -180


/**
 * @description Validate field if it's required and is of valid type
 *
 * @param {object} options.form
 * @param {string} options.propName
 * @param {string} [options.type="string"] - defaults to string
 * @param {boolean} [options.isRequired=boolean] - defaults to false
 *
 * @return {object} error message object || empty object
 */
export const checkProperty = (options: Options) => {
    const { form, propName, type = types.STRING, isRequired = false } = options;

    // @ts-ignore
    if (!isRequired && voidTypes.includes(form[propName])) {
        return {};
    }

    if (types.STRING === type) {
        // @ts-ignore
        form[propName] = form[propName].trim();
    }

    return !form.hasOwnProperty(propName) && isRequired
        ? { [propName]: `${propName} - ${required}` }
        // @ts-ignore
        : form.hasOwnProperty(propName) && typeof form[propName] !== type
            // @ts-ignore
            ? { [propName]: invalidTypes[type] }
            : {};
};

export const createRedisKey = (...args: any[]) => args.join(':').toLowerCase();
