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
  onCopyEventInvite(): void
}

const InviteLink = (props: IInviteLinkProps & WithStyles) => {
  const { inviteId, classes } = props
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
        variant={'raised'}
        className={classes.button}
      >
        Share Event
      </Button>
    </CopyToClipboard>
  )
}

export default decorated(InviteLink)