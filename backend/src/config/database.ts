// backend/src/config/database.ts
import { Db, MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName = process.env.DB_NAME || 'obeo-pms';

let client: MongoClient;
let db: Db;

export const connectToDatabase = async () => {
  try {
    client = new MongoClient(uri);
    await client.connect();
    db = client.db(dbName);
    console.log('Connected to MongoDB');
    return db;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

export const getDatabase = () => {
  if (!db) {
    throw new Error('Database not initialized. Call connectToDatabase first.');
  }
  return db;
};

export const getClient = () => {
  if (!client) {
    throw new Error('MongoClient not initialized. Call connectToDatabase first.');
  }
  return client;
};