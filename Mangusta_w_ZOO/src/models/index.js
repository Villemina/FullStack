import mongoose from 'mongoose';

import { DB_ADDRESS, DB_NAME, DB_PORT } from '../config/db.js';

const connectToMongoose = async () => {
  const url = `mongodb://${DB_ADDRESS}:${DB_PORT}/${DB_NAME}`;

  await mongoose.connect(url, { useNewUrlParser: true });
};

export { connectToMongoose };

export default {
  connectToMongoose,
};
