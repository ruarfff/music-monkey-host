import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import { WithStyles } from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import { Email, Phone } from '@material-ui/icons'
import * as React from 'react'
import facebookIcon from '../assets/facebook.svg'
import instagramIcon from '../assets/instagram-icom.svg'
import twitterIcon from '../assets/twitter.svg'
import EventInput from '../components/EventInput/EventInput'
import IAction from '../IAction'
import IUser from '../user/IUser'
import EditAvatar from './EditAvatar'

const decorate = withStyles(() => ({
  avatarBlock: {
    maxWidth: '125px',
    marginBottom: '20px',
  },
  avatarImg: {
    width: '125px',
    height: '125px'
  },
  title: {
    fontSize: '20px',
    lineHeight: '23px',
    marginBottom: '10px',
  },
  description: {
    fontSize: '18px'
  },
  editButton: {
    color: 'white',
    maxWidth: '200px'
  },
  input: {
    maxWidth: '200px',
    maxHeight: '40px',
    marginTop: '0!important',
    marginLeft: '10px',
  },
  iconWrapper: {
    height: '20px',
    width: '20px'
  },
  itemRow: {
    height: '60px',
    marginBottom: '10px',
  }
}))

interface IAccountDetailsProps {
  user: IUser
  saveAccountChanges(): IAction
  uploadAvatar(): IAction
}

class AccountDetails extends React.Component<IAccountDetailsProps & WithStyles> {

  public state = {
    isEdit: false,
    email: this.props.user.email,
    phone: '087 1234567',
    facebook: 'test',
    twitter: 'test',
    instagram: 'test',
    showAvatarEditor: false,
  }

  public toggleEditAvatarModal = () => {
    this.setState({showAvatarEditor: !this.state.showAvatarEditor})
  }

  public render() {
    const { isEdit, showAvatarEditor } = this.state
    const { user, classes, uploadAvatar } = this.props
    return (
      <React.Fragment>
        {showAvatarEditor && <EditAvatar
          uploadAvatar={uploadAvatar}
          toggleEditAvatarModal={this.toggleEditAvatarModal}
          url={user.image}
        />}
        <Grid
          item={true}
          md={6}
          container={true}
        >
          <Grid
            item={true}
            className={classes.avatarBlock}
            container={true}
            direction={'column'}
            alignItems={'center'}
          >
            <Avatar
              onClick={this.toggleEditAvatarModal}
              className={classes.avatarImg}
              src={user.image}
            />
            <Typography>
              {user.displayName}
            </Typography>
            <Typography>
              {user.country}
            </Typography>
          </Grid>

          <Grid
            item={true}
            md={12}
          >
            <Typography className={classes.title}>
              Contact Information
            </Typography>
            <Grid
              item={true}
              container={true}
              direction={'row'}
              alignItems={'center'}
              className={classes.itemRow}
            >
              <Grid className={classes.iconWrapper}>
                <Email/>
              </Grid>
              <Grid className={classes.input}>
                {!isEdit ? user.email :
                  <EventInput
                    value={this.state.email}
                    onChange={this.handleEdit('email')}
                  />
                }
              </Grid>
            </Grid>
            <Grid
              item={true}
              container={true}
              direction={'row'}
              alignItems={'center'}
              className={classes.itemRow}
            >
              <Grid className={classes.iconWrapper}>
                <Phone/>
              </Grid>
              <Grid className={classes.input}>
                {!isEdit ? this.state.phone :
                  <EventInput
                    value={this.state.phone}
                    onChange={this.handleEdit('phone')}
                  />
                }
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item={true}
          md={6}
          container={true}
          direction={'column'}
        >
          <Typography className={classes.title}>
            Social Accounts
          </Typography>
          <Grid
            item={true}
            container={true}
            direction={'row'}
            alignItems={'center'}
            className={classes.itemRow}
          >
            <Grid className={classes.iconWrapper}>
              <img src={instagramIcon} alt=""/>
            </Grid>
            <Grid className={classes.input}>
              {!isEdit ? this.state.instagram :
                <EventInput
                  value={this.state.instagram}
                  onChange={this.handleEdit('instagram')}
                />
              }
            </Grid>
          </Grid>
          <Grid
            item={true}
            container={true}
            direction={'row'}
            alignItems={'center'}
            className={classes.itemRow}
          >
            <Grid className={classes.iconWrapper}>
              <img src={facebookIcon} alt=""/>
            </Grid>
            <Grid className={classes.input}>
              {!isEdit ? this.state.facebook :
                <EventInput
                  value={this.state.facebook}
                  onChange={this.handleEdit('facebook')}
                />
              }
            </Grid>
          </Grid>
          <Grid
            item={true}
            container={true}
            direction={'row'}
            alignItems={'center'}
            className={classes.itemRow}
          >
            <Grid className={classes.iconWrapper}>
              <img src={twitterIcon} alt=""/>
            </Grid>
            <Grid className={classes.input}>
              {!isEdit ? this.state.twitter :
                <EventInput
                  value={this.state.twitter}
                  onChange={this.handleEdit('twitter')}
                />
              }
            </Grid>
          </Grid>

          {!this.state.isEdit ?
            <Button
              variant="raised"
              color="primary"
              className={classes.editButton}
              onClick={this.editDetails}
            >
              EDIT CONTACT DETAILS
            </Button> :
            <Button
              variant="raised"
              color="primary"
              className={classes.editButton}
              onClick={this.editDetails}
            >
              SAVE
            </Button>
          }
        </Grid>

      </React.Fragment>
    )
  }

  private editDetails = () => {
    this.setState({isEdit: !this.state.isEdit})
  }

  private handleEdit = (key: string) => (content: any) => {
    const accountPart = {}
    accountPart[key] = content
    this.setState({[key]: content})
    console.log(accountPart)
  }
}

export default decorate(AccountDetails)
