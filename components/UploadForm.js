const uploadStyle = {
  position: 'fixed',
  right: '1px',
  top: '5px',
};

const Upload = () => (
  <div style={uploadStyle}>
    <form method="POST" encType="multipart/form-data" action="/api/upload">
      <input type="file" name="image"></input>
      <input type="submit"></input>
    </form>
  </div>
);

export default Upload;