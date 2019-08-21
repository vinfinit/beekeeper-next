import multer from 'multer';
import util from 'util';
import { sendUploadToGCS } from '../storage/gcp';
import { saveBee } from '../database/bees';

module.exports = async (req, res) => {
  const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
      fileSize: 1 * 1024 * 1024,    // no larger than 1mb
    }
  });

  await util.promisify(upload.single('image'))(req, {});

  if (!req.file) {
    return res.status(204).json({ data: 'no image found' });
  }

  const publicUrl = await sendUploadToGCS(req);
  await saveBee({
    image: publicUrl,
    score: 5,
  });
  
  return res.status(200).json({ publicUrl });
};