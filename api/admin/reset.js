import connectToDatabase from '../../database/connect';

const data = [
  {
    score: 5,
    image: 'https://images.pexels.com/photos/789141/pexels-photo-789141.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    score: 6.8,
    image: 'https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    score: 2,
    image: 'https://images.pexels.com/photos/796620/pexels-photo-796620.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    score: 3.23,
    image: 'https://images.pexels.com/photos/1440387/pexels-photo-1440387.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    score: 9,
    image: 'https://images.pexels.com/photos/1687678/pexels-photo-1687678.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    score: 8,
    image: 'https://images.pexels.com/photos/7835/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    score: 6,
    image: 'https://images.pexels.com/photos/69020/pexels-photo-69020.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    score: 6,
    image: 'https://images.pexels.com/photos/1855280/pexels-photo-1855280.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    score: 8.1,
    image: 'https://images.pexels.com/photos/1663407/pexels-photo-1663407.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    score: 9.2,
    image: 'https://images.pexels.com/photos/2772147/pexels-photo-2772147.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    score: 5.6,
    image: 'https://images.pexels.com/photos/2695703/pexels-photo-2695703.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  }
];

module.exports = async (req, res) => {
  const db = await connectToDatabase(process.env.MONGODB_URI);
  const collection = await db.collection('bees');

  await collection.deleteMany({});
  await collection.insertMany(data);

  res.status(200).json(data)
}