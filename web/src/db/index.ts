import mongodb, { MongoClient } from 'mongodb';

const url = process.env.DB_URL;
if (!url) {
  throw new Error(
    'Please define the DB_URL environment variable inside .env.local'
  );
}

const dbName = process.env.DB_NAME || 'results';

const mongoClient = new MongoClient(url);

let cachedDb: mongodb.Db | null = null;

export async function connectToDatabase() {
  if (cachedDb) return cachedDb;

  const client = await mongoClient.connect();
  const db = client.db(dbName);
  cachedDb = db;
  return db;
}
