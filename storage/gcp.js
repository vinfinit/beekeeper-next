const { Storage } = require('@google-cloud/storage');
const atob = require('atob');

const cred = JSON.parse(atob(process.env.GCLOUD_CREDENTIALS));
const authOptions = {
  credentials: {
    client_email: cred.client_email,
    private_key: cred.private_key,
  },
};

let storage = new Storage(authOptions);
const backet = storage.bucket(process.env.GCP_STORAGE_BUCKET);

// ToDo: to test connection to GCP backet
const getImage = async uri => {
  const [files] = await backet.getFiles({
    directory: 'beekeeper-next',
  });

  return files.map(({ name }) => name);
};

module.exports = {
  getImage,
}