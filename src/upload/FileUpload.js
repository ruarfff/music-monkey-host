import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import upload from 'superagent'

const serviceUrl = process.env.REACT_APP_MM_API_URL

class FileUpload extends Component {
  onDrop(files) {
    upload
      .post(serviceUrl + '/upload')
      .attach('event-image', files[0])
      .end((err, res) => {
        if (err) console.log(err)
        console.log(res)
        alert('File uploaded!')
      })
  }

  render() {
    return (
      <div>
        <Dropzone onDrop={this.onDrop} multiple={false}>
          <div>
            Try dropping a file here, or click to select a file to upload.
          </div>
        </Dropzone>
      </div>
    )
  }
}

export default FileUpload
