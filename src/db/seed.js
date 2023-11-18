import connectToDatabase from "./database";

db = new Mongo().getDB("mongodb://root:example@localhost:27017/taxiapi-mongodb-1?authSource=admin");

// Check if data already exists
const existingCount = db.Driver.countDocuments();

if (existingCount === 0) {
    // Insert new documents only if no data exists
    db.Driver.insertMany([
        {
            "name": "Alice",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.77371,
                    -73.96614
                ]
            },
            "location": "Central Park",
            "timestamp": 1696145534000
        },
        {
            "name": "Bob",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.75276,
                    -73.97143
                ]
            },
            "location": "Times Square",
            "timestamp": 1696256325000
        },
        {
            "name": "Charlie",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.78835,
                    -73.96041
                ]
            },
            "location": "East Harlem",
            "timestamp": 1696329929000
        },
        {
            "name": "Alice",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.76216,
                    -73.97307
                ]
            },
            "location": "Grand Central Terminal",
            "timestamp": 1696446231000
        },
        {
            "name": "Eva",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.77415,
                    -73.95844
                ]
            },
            "location": "The High Line",
            "timestamp": 1696476431000
        },
        {
            "name": "Bob",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.77371,
                    -73.96614
                ]
            },
            "location": "Central Park",
            "timestamp": 1696596636000
        },
        {
            "name": "Charlie",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.75556,
                    -73.97854
                ]
            },
            "location": "Hudson Yards",
            "timestamp": 1696666522000
        },
        {
            "name": "David",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.77607,
                    -73.96105
                ]
            },
            "location": "Union Square",
            "timestamp": 1696783249000
        },
        {
            "name": "Eva",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.78695,
                    -73.94981
                ]
            },
            "location": "Stuyvesant Town",
            "timestamp": 1696888743000
        },
        {
            "name": "Alice",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.74312,
                    -73.98937
                ]
            },
            "location": "Chinatown",
            "timestamp": 1696916857000
        },
        {
            "name": "David",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.77371,
                    -73.96614
                ]
            },
            "location": "Central Park",
            "timestamp": 1697023739000
        },
        {
            "name": "Bob",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.75773,
                    -73.96634
                ]
            },
            "location": "Bryant Park",
            "timestamp": 1697119527000
        },
        {
            "name": "Charlie",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.74884,
                    -73.98172
                ]
            },
            "location": "Chelsea Market",
            "timestamp": 1697222413000
        },
        {
            "name": "Eva",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.77588,
                    -73.94677
                ]
            },
            "location": "East Village",
            "timestamp": 1697275366000
        },
        {
            "name": "Alice",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.77402,
                    -73.95809
                ]
            },
            "location": "Madison Square Park",
            "timestamp": 1697333642000
        },
        {
            "name": "David",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.76226,
                    -73.98478
                ]
            },
            "location": "Hell's Kitchen",
            "timestamp": 1697440128000
        },
        {
            "name": "Charlie",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.76889,
                    -73.96518
                ]
            },
            "location": "Murray Hill",
            "timestamp": 1697550573000
        },
        {
            "name": "Eva",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.74829,
                    -73.97459
                ]
            },
            "location": "Flatiron District",
            "timestamp": 1697659641000
        },
        {
            "name": "Alice",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.76312,
                    -73.98534
                ]
            },
            "location": "Lincoln Center",
            "timestamp": 1697729528000
        },
        {
            "name": "David",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.76793,
                    -73.96201
                ]
            },
            "location": "Kips Bay",
            "timestamp": 1697775342000
        },
        {
            "name": "Charlie",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.76863,
                    -73.95678
                ]
            },
            "location": "Tudor City",
            "timestamp": 1697878533000
        },
        {
            "name": "Eva",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.77235,
                    -73.95578
                ]
            },
            "location": "Morningside Heights",
            "timestamp": 1697971264000
        },
        {
            "name": "Alice",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.74571,
                    -73.99144
                ]
            },
            "location": "Financial District",
            "timestamp": 1698081438000
        },
        {
            "name": "David",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.74814,
                    -73.99004
                ]
            },
            "location": "Battery Park City",
            "timestamp": 1698182819000
        },
        {
            "name": "Charlie",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.7625,
                    -73.97454
                ]
            },
            "location": "Rockefeller Center",
            "timestamp": 1698215965000
        },
        {
            "name": "Eva",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.7629,
                    -73.97259
                ]
            },
            "location": "Theater District",
            "timestamp": 1698332231000
        },
        {
            "name": "Bob",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.77525,
                    -73.95871
                ]
            },
            "location": "Gramercy Park",
            "timestamp": 1698409498000
        },
        {
            "name": "Charlie",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.78293,
                    -73.95433
                ]
            },
            "location": "East Village",
            "timestamp": 1698522624000
        },
        {
            "name": "David",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.77824,
                    -73.95647
                ]
            },
            "location": "Herald Square",
            "timestamp": 1698549127000
        },
        {
            "name": "Eva",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.76441,
                    -73.97233
                ]
            },
            "location": "Flatiron Building",
            "timestamp": 1698658873000
        },
        {
            "name": "Alice",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.77014,
                    -73.95495
                ]
            },
            "location": "Midtown East",
            "timestamp": 1698768597000
        },
        {
            "name": "Bob",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.76083,
                    -73.98433
                ]
            },
            "location": "Columbus Circle",
            "timestamp": 1696184441000
        },
        {
            "name": "Charlie",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.74814,
                    -73.99004
                ]
            },
            "location": "Battery Park City",
            "timestamp": 1696235848000
        },
        {
            "name": "David",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.74898,
                    -73.98265
                ]
            },
            "location": "Meatpacking District",
            "timestamp": 1696348573000
        },
        {
            "name": "Eva",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.75818,
                    -73.96705
                ]
            },
            "location": "Grand Army Plaza",
            "timestamp": 1696458239000
        },
        {
            "name": "Alice",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.76705,
                    -73.96543
                ]
            },
            "location": "Midtown West",
            "timestamp": 1696504116000
        },
        {
            "name": "David",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.76331,
                    -73.97566
                ]
            },
            "location": "High Line Park",
            "timestamp": 1696602882000
        },
        {
            "name": "Charlie",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.77559,
                    -73.94786
                ]
            },
            "location": "Washington Square Park",
            "timestamp": 1696705636000
        },
        {
            "name": "Eva",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.74814,
                    -73.99004
                ]
            },
            "location": "Battery Park City",
            "timestamp": 1696743723000
        },
        {
            "name": "Bob",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.75773,
                    -73.96634
                ]
            },
            "location": "Bryant Park",
            "timestamp": 1696852877000
        },
        {
            "name": "Charlie",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.77749,
                    -73.95381
                ]
            },
            "location": "St. Patrick's Cathedral",
            "timestamp": 1696969743000
        },
        {
            "name": "David",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.78158,
                    -73.95538
                ]
            },
            "location": "Soho",
            "timestamp": 1696992698000
        },
        {
            "name": "Eva",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.7813,
                    -73.95513
                ]
            },
            "location": "Greenwich Village",
            "timestamp": 1697098931000
        },
        {
            "name": "Alice",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.76631,
                    -73.96551
                ]
            },
            "location": "Tribeca",
            "timestamp": 1697215536000
        },
        {
            "name": "David",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.76422,
                    -73.98006
                ]
            },
            "location": "Empire State Building",
            "timestamp": 1697280789000
        },
        {
            "name": "Charlie",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.76012,
                    -73.98853
                ]
            },
            "location": "Chelsea Market",
            "timestamp": 1697412351000
        },
        {
            "name": "Eva",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.77487,
                    -73.95661
                ]
            },
            "location": "Madison Square Garden",
            "timestamp": 1697427845000
        },
        {
            "name": "Alice",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.78419,
                    -73.95642
                ]
            },
            "location": "Chrysler Building",
            "timestamp": 1697537250000
        },
        {
            "name": "David",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.74829,
                    -73.97459
                ]
            },
            "location": "Flatiron District",
            "timestamp": 1697640916000
        },
        {
            "name": "Charlie",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.75782,
                    -73.96648
                ]
            },
            "location": "Hudson River Park",
            "timestamp": 1697750269000
        },
        {
            "name": "Eva",
            "coordinates": {
                "type": "Point",
                "coordinates": [
                    40.78253,
                    -73.95524
                ]
            },
            "location": "The Met",
            "timestamp": 1697823754000
        }
    ]);

    print("Data seeded successfully.");
} else {
    print("Database already contains data. No seeding needed.");
}