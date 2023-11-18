# Mastermind Demo - Geo Location app

A demo project showcasing a Node.js application with dockerized MongoDb (mongoose) and Redis cache

## Overview

This project was made following the requirement from a client for the purpose of a job interview.
It is an application that exposes several endpoints for tracking taxi driver locations

## Prerequisites

- [Nodejs](https://nodejs.org/en)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

Follow these steps to get the project up and running on your local machine.

1. **Clone the Repository:**

   ```bash
   git clone git@github.com:igeto/mastermind-demo.git
   cd mastermind-demo

2. In the root folder create a `.env` file with the following content:
    ```txt
    DB_URI=mongodb://root:example@localhost:27017/mastermind-demo-mongodb-1?authSource=admin
    NODE_ENV=development
    PORT=3000

3. Start the mongo database and redis cache using the command:
    ```bash
   docker-compose up -d

4. In the root folder open a terminal and run this command to seed the database with mock data
    ```bash
   ts-node ./src/scripts/populateMockData.ts

5. Finally, you can start the project running the following commands:
   ```bash
   npm i
   npm start
   
6. This project provides a swagger documentation with all the endpoints and models where all the endpoints can be tested.
To use the swagger documentation and test all the endpoints, start the project first then go to [http://localhost:3000/api/exposed/api-docs/#/]()
