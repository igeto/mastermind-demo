// populateMockData.js

import mongoose from "mongoose";
import DriverMongoose from "../models/driver.mongoose";
const dbUri = 'mongodb://root:example@localhost:27017/mastermind-demo-mongodb-1?authSource=admin';

mongoose.connect(dbUri);
async function populateData() {
    // Example: Insert mock data for drivers
    const mockDrivers = JSON.parse(`[
        {
            "driver": "Alice",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.96614,
                    40.77371
                ]
            },
            "location": "Central Park",
            "timestamp": 1696145534000
        },
        {
            "driver": "Bob",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.97143,
                    40.75276
                ]
            },
            "location": "Times Square",
            "timestamp": 1696256325000
        },
        {
            "driver": "Charlie",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.96041,
                    40.78835
                ]
            },
            "location": "East Harlem",
            "timestamp": 1696256325000
        },
        {
            "driver": "Alice",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.97307,
                    40.76216
                ]
            },
            "location": "Grand Central Terminal",
            "timestamp": 1672867200
        },
        {
            "driver": "Eva",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.95844,
                    40.77415
                ]
            },
            "location": "The High Line",
            "timestamp": 1672953600
        },
        {
            "driver": "Bob",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.96614,
                    40.77371
                ]
            },
            "location": "Central Park",
            "timestamp": 1673040000
        },
        {
            "driver": "Charlie",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.97854,
                    40.75556
                ]
            },
            "location": "Hudson Yards",
            "timestamp": 1673126400
        },
        {
            "driver": "David",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.96105,
                    40.77607
                ]
            },
            "location": "Union Square",
            "timestamp": 1673212800
        },
        {
            "driver": "Eva",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.94981,
                    40.78695
                ]
            },
            "location": "Stuyvesant Town",
            "timestamp": 1673299200
        },
        {
            "driver": "Alice",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.98937,
                    40.74312
                ]
            },
            "location": "Chinatown",
            "timestamp": 1673385600
        },
        {
            "driver": "David",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.96614,
                    40.77371
                ]
            },
            "location": "Central Park",
            "timestamp": 1673472000
        },
        {
            "driver": "Bob",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.96634,
                    40.75773
                ]
            },
            "location": "Bryant Park",
            "timestamp": 1673558400
        },
        {
            "driver": "Charlie",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.98172,
                    40.74884
                ]
            },
            "location": "Chelsea Market",
            "timestamp": 1673644800
        },
        {
            "driver": "Eva",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.94677,
                    40.77588
                ]
            },
            "location": "East Village",
            "timestamp": 1673731200
        },
        {
            "driver": "Alice",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.95809,
                    40.77402
                ]
            },
            "location": "Madison Square Park",
            "timestamp": 1673817600
        },
        {
            "driver": "David",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.98478,
                    40.76226
                ]
            },
            "location": "Hell's Kitchen",
            "timestamp": 1673904000
        },
        {
            "driver": "Charlie",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.96518,
                    40.76889
                ]
            },
            "location": "Murray Hill",
            "timestamp": 1673990400
        },
        {
            "driver": "Eva",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.97459,
                    40.74829
                ]
            },
            "location": "Flatiron District",
            "timestamp": 1674076800
        },
        {
            "driver": "Alice",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.98534,
                    40.76312
                ]
            },
            "location": "Lincoln Center",
            "timestamp": 1674163200
        },
        {
            "driver": "David",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.96201,
                    40.76793
                ]
            },
            "location": "Kips Bay",
            "timestamp": 1674249600
        },
        {
            "driver": "Charlie",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.95678,
                    40.76863
                ]
            },
            "location": "Tudor City",
            "timestamp": 1674336000
        },
        {
            "driver": "Eva",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.95578,
                    40.77235
                ]
            },
            "location": "Morningside Heights",
            "timestamp": 1674422400
        },
        {
            "driver": "Alice",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.99144,
                    40.74571
                ]
            },
            "location": "Financial District",
            "timestamp": 1674508800
        },
        {
            "driver": "David",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.99004,
                    40.74814
                ]
            },
            "location": "Battery Park City",
            "timestamp": 1674595200
        },
        {
            "driver": "Charlie",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.97454,
                    40.7625
                ]
            },
            "location": "Rockefeller Center",
            "timestamp": 1674681600
        },
        {
            "driver": "Eva",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.97259,
                    40.7629
                ]
            },
            "location": "Theater District",
            "timestamp": 1674768000
        },
        {
            "driver": "Bob",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.95871,
                    40.77525
                ]
            },
            "location": "Gramercy Park",
            "timestamp": 1674854400
        },
        {
            "driver": "Charlie",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.95433,
                    40.78293
                ]
            },
            "location": "East Village",
            "timestamp": 1674940800
        },
        {
            "driver": "David",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.95647,
                    40.77824
                ]
            },
            "location": "Herald Square",
            "timestamp": 1675027200
        },
        {
            "driver": "Eva",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.97233,
                    40.76441
                ]
            },
            "location": "Flatiron Building",
            "timestamp": 1675113600
        },
        {
            "driver": "Alice",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.95495,
                    40.77014
                ]
            },
            "location": "Midtown East",
            "timestamp": 1675200000
        },
        {
            "driver": "Bob",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.98433,
                    40.76083
                ]
            },
            "location": "Columbus Circle",
            "timestamp": 1675286400
        },
        {
            "driver": "Charlie",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.99004,
                    40.74814
                ]
            },
            "location": "Battery Park City",
            "timestamp": 1675372800
        },
        {
            "driver": "David",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.98265,
                    40.74898
                ]
            },
            "location": "Meatpacking District",
            "timestamp": 1675459200
        },
        {
            "driver": "Eva",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.96705,
                    40.75818
                ]
            },
            "location": "Grand Army Plaza",
            "timestamp": 1675545600
        },
        {
            "driver": "Alice",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.96543,
                    40.76705
                ]
            },
            "location": "Midtown West",
            "timestamp": 1675632000
        },
        {
            "driver": "David",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.97566,
                    40.76331
                ]
            },
            "location": "High Line Park",
            "timestamp": 1675718400
        },
        {
            "driver": "Charlie",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.94786,
                    40.77559
                ]
            },
            "location": "Washington Square Park",
            "timestamp": 1675804800
        },
        {
            "driver": "Eva",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.99004,
                    40.74814
                ]
            },
            "location": "Battery Park City",
            "timestamp": 1675891200
        },
        {
            "driver": "Bob",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.96634,
                    40.75773
                ]
            },
            "location": "Bryant Park",
            "timestamp": 1675977600
        },
        {
            "driver": "Charlie",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.95381,
                    40.77749
                ]
            },
            "location": "St. Patrick's Cathedral",
            "timestamp": 1676064000
        },
        {
            "driver": "David",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.95538,
                    40.78158
                ]
            },
            "location": "Soho",
            "timestamp": 1676150400
        },
        {
            "driver": "Eva",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.95513,
                    40.7813
                ]
            },
            "location": "Greenwich Village",
            "timestamp": 1676236800
        },
        {
            "driver": "Alice",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.96551,
                    40.76631
                ]
            },
            "location": "Tribeca",
            "timestamp": 1676323200
        },
        {
            "driver": "David",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.98006,
                    40.76422
                ]
            },
            "location": "Empire State Building",
            "timestamp": 1676409600
        },
        {
            "driver": "Charlie",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.98853,
                    40.76012
                ]
            },
            "location": "Chelsea Market",
            "timestamp": 1676496000
        },
        {
            "driver": "Eva",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.95661,
                    40.77487
                ]
            },
            "location": "Madison Square Garden",
            "timestamp": 1676582400
        },
        {
            "driver": "Alice",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.95642,
                    40.78419
                ]
            },
            "location": "Chrysler Building",
            "timestamp": 1676668800
        },
        {
            "driver": "David",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.97459,
                    40.74829
                ]
            },
            "location": "Flatiron District",
            "timestamp": 1676755200
        },
        {
            "driver": "Charlie",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.96648,
                    40.75782
                ]
            },
            "location": "Hudson River Park",
            "timestamp": 1676841600
        },
        {
            "driver": "Eva",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    -73.95524,
                    40.78253
                ]
            },
            "location": "The Met",
            "timestamp": 1676928000
        }
    ]`);

    try {
        await DriverMongoose.insertMany(mockDrivers);
        console.log('Mock data inserted successfully!');
    } catch (error) {
        console.error('Error inserting mock data:', error);
    } finally {
        mongoose.disconnect();
    }
}

populateData();
