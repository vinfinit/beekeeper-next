import fetch from 'isomorphic-unfetch';

module.exports = async (req, res) => {
  // const queryParams = { q: req.params.q, page: req.params.page }
  const tvRes = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await tvRes.json()
  res.json(data)
};