import connectToDatabase from '../database/connect';
import { ObjectID } from 'mongodb';

module.exports = async (req, res) => {
  const { query } = req;
  const db = await connectToDatabase(process.env.MONGODB_URI);
  const collection = await db.collection('bees');

  const filter = query.id ? {_id: ObjectID(query.id)} : {};
  const post = await collection.find(filter).toArray();

  res.json(post)
};