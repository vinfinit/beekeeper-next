import { findBees } from '../database/bees';

module.exports = async (req, res) => {
  const { query } = req;

  const bees = await findBees(query.id);

  res.json(bees);
};