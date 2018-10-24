import Button from '@material-ui/core/Button'
import * as React from 'react'
import InviteLink from '../InviteLink/InviteLink'
import ShareEventByEmail from './ShareEventByEmailContainer'
import './SharePopup.scss'

interface ISharePopupProps {
  inviteId: string
  onCopyEventInvite(): void
}

class SharePopup extends React.PureComponent<ISharePopupProps> {
  public state = {
    showPopup: false
  }

  public render() {
    const { inviteId, onCopyEventInvite} = this.props
    const { showPopup } = this.state
    return (
      <React.Fragment>
        <Button
          onClick={this.togglePopup}
        >
          SHARE EVENT
        </Button>
        {showPopup &&
          <div className='SharePopupWrapper' onClick={this.closePopup}>
            <div className='SharePopupContainer'>
              <ShareEventByEmail togglePopup={this.togglePopup}/>
              <InviteLink
                togglePopup={this.togglePopup}
                inviteId={inviteId}
                onCopyEventInvite={onCopyEventInvite}
              />
              <a
                id='fbLink'
                href={'https://www.facebook.com/sharer/sharer.php?u=guests.musicmonkey.io/invite/' + inviteId}
                target="_blank"
              >
                <Button onClick={this.togglePopup}>
                  SHARE ON FACEBOOK
                </Button>
              </a>

            </div>
          </div>
        }
      </React.Fragment>
    )
  }

  private togglePopup = () => {
    this.setState({showPopup: !this.state.showPopup})
  }

  private closePopup = (e: any) => {
    if (e.target.classList.contains('SharePopupWrapper')) {
      this.setState({showPopup: false})
    }
  }
}

export default SharePopup