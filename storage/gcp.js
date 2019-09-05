const { Storage } = require('@google-cloud/storage');
const atob = require('atob');

const { 
  GCLOUD_CREDENTIALS, 
  CLOUD_BUCKET,
  CLOUD_DIRECTORY,
 } = process.env;

const cred = JSON.parse(atob(GCLOUD_CREDENTIALS));
const authOptions = {
  credentials: {
    client_email: cred.client_email,
    private_key: cred.private_key,
  },
};

let storage = new Storage(authOptions);
const bucket = storage.bucket(CLOUD_BUCKET);

const getPublicUrl = filename => `https://storage.googleapis.com/${CLOUD_BUCKET}/${filename}`;

// ToDo: to test connection to GCP bucket
const getImage = async uri => {
  const [files] = await bucket.getFiles({
    directory: 'beekeeper-next',
  });

  return files.map(({ metadata: { mediaLink } }) => mediaLink);
};

const sendUploadToGCS = async req => {
  const gcsname = `${CLOUD_DIRECTORY}/${Date.now()}_${req.file.originalname}`;
  const file = bucket.file(gcsname);

  const stream = file.createWriteStream({
    metadata: {
      contentType: req.file.mimetype
    },
    resumable: false
  });

  const publicUrl = await new Promise((resolve, reject) => {
    stream.on('error', reject);
  
    stream.on('finish', async () => {
      try {
        await file.makePublic();
      }
      catch(err) {
        reject(err);
      }
      resolve(getPublicUrl(gcsname));
    });
  
    stream.end(req.file.buffer);
  });

  return publicUrl;
};

module.exports = {
  getImage,
  sendUploadToGCS,
}