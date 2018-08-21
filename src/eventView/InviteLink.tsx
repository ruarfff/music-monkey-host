import FormControl from '@material-ui/core/FormControl/FormControl'
import IconButton from '@material-ui/core/IconButton/IconButton'
import Input from '@material-ui/core/Input/Input'
import InputAdornment from '@material-ui/core/InputAdornment/InputAdornment'
import InputLabel from '@material-ui/core/InputLabel/InputLabel'
import ContentCopy from '@material-ui/icons/ContentCopy'
import { isEmpty } from 'lodash'
import * as React from 'react'
import * as CopyToClipboard from 'react-copy-to-clipboard'

interface IInviteLinkProps {
  inviteId: string
  onCopyEventInvite(): void
}

const InviteLink = (props: IInviteLinkProps) => {
  const { inviteId } = props
  if (isEmpty(inviteId)) {
    return <span />
  }
  const inviteLink = 'https://guests.musicmonkey.io/invite/' + inviteId

  return (
    <CopyToClipboard text={inviteLink} onCopy={props.onCopyEventInvite}>
      <FormControl>
        <InputLabel htmlFor="invite-link">invite Link</InputLabel>
        <Input
          disabled={true}
          id="invite-link"
          type="text"
          value={inviteLink}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="Copy to clipboard">
                <ContentCopy />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </CopyToClipboard>
  )
}

export default InviteLink
