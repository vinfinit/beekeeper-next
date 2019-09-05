import { Component } from 'react';

const uploadStyle = {
  position: 'fixed',
  right: '1px',
  top: '5px',
};

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
    })
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
      <div style={uploadStyle}>
        <form onSubmit={this.handleSubmit}>
          <input 
            name="image" 
            type="file"
            onChange={this.handleFileChange}>
          </input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
};

export default Upload;