import * as AWS from 'aws-sdk'
import * as React from 'react'
import { DropzoneComponent } from 'react-dropzone-component'
import * as uuidv1 from 'uuid/v1'
import '../../node_modules/dropzone/dist/min/dropzone.min.css'
import '../../node_modules/react-dropzone-component/styles/filepicker.css'
import Action from '../Action'

const bucket = 'musicmonkey-uploads'
const bucketRegion = 'eu-west-1'
const IdentityPoolId = 'eu-west-1:cf3e89d6-8cce-4eab-a432-fb3ba85798ba'

AWS.config.update({
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId
  }),
  region: bucketRegion
})

const s3 = new AWS.S3({
  apiVersion: '2006-03-01'
})

const djsConfig = {
  autoProcessQueue: false,
  dictDefaultMessage: 'Event Image',
  maxFiles: 1,
  paramName: 'event-image'
}

function upload(file: any) {
  const key = 'event-images/'
  const fileName = uuidv1() + '-' + file.name

  return new Promise((resolve, reject) => {
    s3.putObject(
      {
        ACL: 'public-read',
        Body: file,
        Key: key + fileName,
        Bucket: bucket
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
  postUrl: 'upload'
}

interface IFileUploadProps {
  onUpload(): Action
  onUploadError(): Action
}

class FileUpload extends React.Component<IFileUploadProps, {}> {
  public render() {
    const { onUpload, onUploadError } = this.props
    const eventHandlers = {
      addedfile: (file: any) => {
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

export default FileUpload