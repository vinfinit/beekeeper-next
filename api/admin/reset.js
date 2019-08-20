import connectToDatabase from '../../database/connect';

const data = [
  {
    score: 5,
    image: 'https://www.googleapis.com/download/storage/v1/b/beekeeper/o/beekeeper-next%2Fduckling-birds-yellow-fluffy-162140.jpeg?generation=1566240884340771&alt=media'
  },
  {
    score: 6.8,
    image: 'https://www.googleapis.com/download/storage/v1/b/beekeeper/o/beekeeper-next%2Fpexels-photo-1440387.jpeg?generation=1566240883242805&alt=media'
  },
  {
    score: 2,
    image: 'https://www.googleapis.com/download/storage/v1/b/beekeeper/o/beekeeper-next%2Fpexels-photo-1663407.jpeg?generation=1566240880840764&alt=media'
  },
  {
    score: 3.23,
    image: 'https://www.googleapis.com/download/storage/v1/b/beekeeper/o/beekeeper-next%2Fpexels-photo-1687678.jpeg?generation=1566240883240042&alt=media'
  },
  {
    score: 9,
    image: 'https://www.googleapis.com/download/storage/v1/b/beekeeper/o/beekeeper-next%2Fpexels-photo-1855280.jpeg?generation=1566240881949710&alt=media'
  },
  {
    score: 8,
    image: 'https://www.googleapis.com/download/storage/v1/b/beekeeper/o/beekeeper-next%2Fpexels-photo-2695703.jpeg?generation=1566240881043504&alt=media'
  },
  {
    score: 6,
    image: 'https://www.googleapis.com/download/storage/v1/b/beekeeper/o/beekeeper-next%2Fpexels-photo-2772147.jpeg?generation=1566240881041419&alt=media'
  },
  {
    score: 6,
    image: 'https://www.googleapis.com/download/storage/v1/b/beekeeper/o/beekeeper-next%2Fpexels-photo-69020.jpeg?generation=1566240882040046&alt=media'
  },
  {
    score: 8.1,
    image: 'https://www.googleapis.com/download/storage/v1/b/beekeeper/o/beekeeper-next%2Fpexels-photo-789141.jpeg?generation=1566240884741364&alt=media'
  },
  {
    score: 9.2,
    image: 'https://www.googleapis.com/download/storage/v1/b/beekeeper/o/beekeeper-next%2Fpexels-photo-796620.jpeg?generation=1566240883341999&alt=media'
  },
  {
    score: 5.6,
    image: 'https://www.googleapis.com/download/storage/v1/b/beekeeper/o/beekeeper-next%2Fpexels-photo.jpg?generation=1566240882239362&alt=media'
  }
];

module.exports = async (req, res) => {
  const db = await connectToDatabase(process.env.MONGODB_URI);
  const collection = await db.collection('bees');

  await collection.deleteMany({});
  await collection.insertMany(data);

  res.status(200).json(data)
}