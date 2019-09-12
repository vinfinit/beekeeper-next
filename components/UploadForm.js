import { Component } from 'react';
import styles from '../styles/components/upload.scss';

class Upload extends Component {
  constructor() {
    super();
    this.state = {
      image: '',
    }
  }

  handleFileChange = e => {
    this.setState({
      [e.target.name]: e.target.files[0],
    });
  }

  uploadFile = e => {
    const formData = new FormData();
    formData.append([e.target.name], e.target.files[0]);

    fetch('/api/upload', {
      method: 'POST',
      body: formData,
    }).then(r => alert('done'));
  }

  handleSubmit = async e => {
    e.preventDefault();

    const formData = new FormData();
    for (let name in this.state) {
      formData.append(name, this.state[name]);
    }

    await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
    
    alert('done');
  }

  render() {
    return (
      <div className={styles.upload}>
        <label for="file-upload">
          {/* TODO use SVG as icon */}
          <img className={styles.icon} src="static/img/camera.svg"/>
        </label>
        <input
          className={styles.uploadFile}
          id="file-upload"
          name="image" 
          type="file"
          onChange={this.uploadFile}>
        </input> 
        {/* <form onSubmit={this.handleSubmit}>
          <input 
            name="image" 
            type="file"
            onChange={this.handleFileChange}>
          </input>
          <input type="submit"></input>
        </form> */}
      </div>
    )
  }
};

export default Upload;

{/* <label for="file-upload"> */}
{/* TODO use SVG as icon */}
{/* <img className={styles.icon} src="static/img/camera.svg"/>
</label>
<input
className={styles.uploadFile}
  id="file-upload"
  name="image" 
  type="file"
  onChange={this.handleFileChange}>
</input> */}