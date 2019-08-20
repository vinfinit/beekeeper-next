import multer from 'multer';
import util from 'util';
import { sendUploadToGCS } from "../storage/gcp";

module.exports = async (req, res) => {
  const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
      fileSize: 1 * 1024 * 1024,    // no larger than 1mb
    }
  });

  await util.promisify(upload.single('image'))(req, {});

  if (req.file) {
    const publicUrl = await sendUploadToGCS(req);
    res.status(200).json({ publicUrl });
  }

  res.status(204).json();
};