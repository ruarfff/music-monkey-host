import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import upload from 'superagent'
import ReactDOM from 'react-dom';

import DropzoneComponent from 'react-dropzone-component';

const djsConfig = { autoProcessQueue: false }
const eventHandlers = { addedfile: (file) => console.log(file) }
const componentConfig = {
    iconFiletypes: ['.jpg', '.png', '.gif'],
    showFiletypeIcon: true,
    postUrl: '/uploadHandler'
};


const serviceUrl = process.env.REACT_APP_MM_API_URL

class FileUpload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageFiles: []
    }
  }

  onDrop(files) {
    upload
      .post(serviceUrl + '/upload')
      .attach('event-image', files[0])
      .end((err, res) => {
        if (err) return err
        this.setState({
          imageFiles: files
        })
      })
  }

  render() {
    return (
      <div>
         <DropzoneComponent config={componentConfig}
                       eventHandlers={eventHandlers}
                       djsConfig={djsConfig} />
        
      </div>
    )
  }
}
/**
 * <Dropzone onDrop={this.onDrop} multiple={false}>
          <div>
            Try dropping a file here, or click to select a file to upload.
          </div>
        </Dropzone>
 */
export default FileUpload
