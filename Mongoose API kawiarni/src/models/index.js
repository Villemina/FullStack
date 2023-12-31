import mongoose from 'mongoose';

import { DB_ADDRESS, DB_NAME, DB_PORT } from '../config/db';

const connectToMongoose = async () => {
    const url = `mongodb://${DB_ADDRESS}:${DB_PORT}/${DB_NAME}`;

    await mongoose.connect(url, { useNewUrlParser: true });

    return mongoose.connection.db;
};

export { connectToMongoose };

export default {
    connectToMongoose,
};
