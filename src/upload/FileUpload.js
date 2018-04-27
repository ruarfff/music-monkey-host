import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DropzoneComponent from 'react-dropzone-component'
import AWS from 'aws-sdk'
import uuidv1 from 'uuid/v1'
import '../../node_modules/dropzone/dist/min/dropzone.min.css'
import '../../node_modules/react-dropzone-component/styles/filepicker.css'

const bucket = 'musicmonkey-uploads'
var bucketRegion = 'eu-west-1'
var IdentityPoolId = 'eu-west-1:cf3e89d6-8cce-4eab-a432-fb3ba85798ba'

AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId
  })
})

var s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: { Bucket: bucket }
})

const djsConfig = {
  autoProcessQueue: false,
  maxFiles: 1,
  paramName: 'event-image'
}

function upload(file) {
  const key = 'event-images/'
  const fileName = uuidv1() + '-' + file.name

  return new Promise((resolve, reject) => {
    s3.putObject(
      {
        Key: key + fileName,
        Body: file,
        ACL: 'public-read'
      },
      err => {
        if (err) {
          reject(err)
        } else {
          resolve(`http://${bucket}.s3.amazonaws.com/${key}${fileName}`)
        }
      }
    )
  })
}

const componentConfig = {
  iconFiletypes: ['.jpg', '.png', '.gif'],
  showFiletypeIcon: true,
  postUrl: 'upload'
}

class FileUpload extends Component {
  render() {
    const { onUpload, onUploadError } = this.props
    const eventHandlers = {
      addedfile: file => {
        upload(file)
          .then(onUpload)
          .catch(onUploadError)
      }
    }
    return (
      <div>
        <DropzoneComponent
          config={componentConfig}
          eventHandlers={eventHandlers}
          djsConfig={djsConfig}
        />
      </div>
    )
  }
}

FileUpload.propTypes = {
  onUpload: PropTypes.func.isRequired,
  onUploadError: PropTypes.func.isRequired
}

export default FileUpload
