import Button from '@material-ui/core/Button'
import { WithStyles } from '@material-ui/core/es'
import withStyle from '@material-ui/core/styles/withStyles'
import { isEmpty } from 'lodash'
import * as React from 'react'
import * as CopyToClipboard from 'react-copy-to-clipboard'

const decorated = withStyle(() => ({
  button: {
    color: 'white',
  },
}))

interface IInviteLinkProps {
  inviteId: string
  togglePopup?(e: any): void
  onCopyEventInvite(): void
}

const InviteLink = (props: IInviteLinkProps & WithStyles) => {
  const { inviteId, classes,togglePopup } = props
  if (isEmpty(inviteId)) {
    return <span />
  }
  const inviteLink = 'https://guests.musicmonkey.io/invite/' + inviteId

  return (
    <CopyToClipboard text={inviteLink} onCopy={props.onCopyEventInvite}>
      <Button
        id="invite-link"
        value={inviteLink}
        color={'primary'}
        variant={'contained'}
        className={classes.button}
        onClick={togglePopup}
      >
        Copy Link
      </Button>
    </CopyToClipboard>
  )
}

export default decorated(InviteLink)
