import { createClient } from 'redis';

const redisClient = async () => {
    const client = await createClient()
        .on('error', err => console.log('Error connecting to redis', err))
        .connect();
    return client;
}

export default redisClient;
