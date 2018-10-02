import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import { WithStyles } from '@material-ui/core/styles/withStyles'
import * as React from 'react'
import IAction from '../IAction'
// import IAction from '../IAction'
import IUser from '../user/IUser'
// import Typography from '@material-ui/core/Typography'
import AccountDetails from './AccountDetails'
// import AppBar from '@material-ui/core/AppBar'
// import Tabs from '@material-ui/core/Tabs'
// import Tab from '@material-ui/core/Tab'

const decorate = withStyles(() => ({
  accountWrapper: {
    padding: '40px'
  },
  accountLeftSide: {

    // borderRight: '1px solid #5157ab',
    // marginRight: '-12px',
  },
  tabContainer: {
    background: 'white',
    boxShadow: 'none',
    marginBottom: '10px'
  },
  tab: {
  },
  tabs: {
    color: '#5157ab',
    borderBottom: '1px solid #5157ab'
  },
}))

interface IAccountViewProps {
  user: IUser
  saveAccountChanges(): IAction
  uploadAvatar(): IAction
}

// function TabContainer({ children, dir }: any) {
//   return (
//     <Typography style={{height: '100%'}} component="div" dir={dir}>
//       {children}
//     </Typography>
//   )
// }

class AccountView extends React.Component<IAccountViewProps & WithStyles> {
  public state = {
    tabIndex: 0
  }

  // private handleTabChange = (event: any, index: number) => {
  //   this.setState({ tabIndex: index })
  // }

  public render() {
    // const { tabIndex } = this.state
    const { user, classes, saveAccountChanges, uploadAvatar } = this.props
    return (
      <Grid className={classes.accountWrapper} container={true} spacing={24}>
        <Grid
          container={true}
          item={true}
          md={12}
          className={classes.accountLeftSide}
        >
          <AccountDetails
            user={user}
            saveAccountChanges={saveAccountChanges}
            uploadAvatar={uploadAvatar}
          />
        </Grid>
        {/*<Grid*/}
          {/*container={true}*/}
          {/*item={true}*/}
          {/*md={8}*/}
        {/*>*/}
          {/*<AppBar*/}
            {/*position="static"*/}
            {/*color="default"*/}
            {/*className={classes.tabContainer}*/}
          {/*>*/}
            {/*<Tabs*/}
              {/*value={tabIndex}*/}
              {/*onChange={this.handleTabChange}*/}
              {/*TabIndicatorProps={{className: classes.tabs}}*/}
              {/*centered={true}*/}
              {/*className={classes.tabs}*/}
              {/*fullWidth={true}*/}
            {/*>*/}
              {/*<Tab className={classes.tab} label="Subscription" />*/}
              {/*<Tab className={classes.tab} label="Contacts" />*/}
            {/*</Tabs>*/}
          {/*</AppBar>*/}
          {/*{tabIndex === 0 && (*/}
            {/*<TabContainer className={classes.content} dir={'x'}>*/}
            {/*</TabContainer>*/}
          {/*)}*/}
          {/*{tabIndex === 1 && (*/}
            {/*<TabContainer className={classes.content} dir={'x'}>*/}
            {/*</TabContainer>*/}
          {/*)}*/}
        {/*</Grid>*/}
      </Grid>
    )
  }
}

export default decorate(AccountView)
