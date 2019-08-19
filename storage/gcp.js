const { Storage } = require('@google-cloud/storage');
const storage = new Storage();
const backet = storage.bucket(process.env.GCP_STORAGE_BUCKET);

// ToDo: to test connection to GCP backet
const getImage = async uri => {
  const [files] = await backet.getFiles({
    directory: 'beekeeper-next',
  });
  console.log('Files:');
  files.forEach(file => {
    console.log(file.name);
  });

  return files;
};

module.exports = {
  getImage,
}