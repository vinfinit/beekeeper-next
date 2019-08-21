import connectToDatabase from './connect';

const BEE_COLLECTION = 'bees'

const saveBee = async ({ image, score = 5 }) => {
  if (!image) {
    throw new Error('no image')
  }

  const db = await connectToDatabase()
  await db.collection(BEE_COLLECTION).save({ image, score })
}

const findBees = async id => {
  const db = await connectToDatabase()
  const collection = await db.collection(BEE_COLLECTION)

  const filter = id ? {_id: ObjectID(id)} : {}
  return await collection.find(filter).toArray()
}

module.exports = {
  saveBee,
  findBees,
};