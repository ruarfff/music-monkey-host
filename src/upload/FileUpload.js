import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import DropzoneComponent from 'react-dropzone-component'
import axios from 'axios'
import '../../node_modules/dropzone/dist/min/dropzone.min.css'
import '../../node_modules/react-dropzone-component/styles/filepicker.css'
import AWS from 'aws-sdk'
import uuidv1 from 'uuid/v1'

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

const serviceUrl = process.env.REACT_APP_MM_API_URL

const djsConfig = {
  autoProcessQueue: false,
  maxFiles: 1,
  paramName: 'event-image'
}

function upload(file) {
  const key = 'event-images/'
  const fileName = uuidv1() + '-' + file.name
  console.log(fileName)
  s3.putObject(
    {
      Key: key + fileName,
      Body: file,
      ACL: 'public-read'
    },
    err => {
      if (err) {
        console.log(err)
      } else {
        console.log(`http://${bucket}.s3.amazonaws.com/${key}${fileName}`)
      }
    }
  )
}

const eventHandlers = {
  addedfile: file => {
    console.log(file)
    upload(file)
  }
}
const componentConfig = {
  iconFiletypes: ['.jpg', '.png', '.gif'],
  showFiletypeIcon: true,
  postUrl: 'upload'
}

class FileUpload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageFiles: []
    }
  }

  render() {
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

export default FileUpload
