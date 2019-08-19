import { getImage } from "../storage/gcp";

module.exports = async (req, res) => {
  const images = await getImage();

  res.status(200).json(images);
};