import withStyles from '@material-ui/core/styles/withStyles'

export const decorate = withStyles(() => ({
  input: {
    borderRadius: '4px',
    border: '1px solid #979797',
    paddingLeft: '16px',
    minHeight: '40px',
    '&:hover:not($disabled):before': {
      borderBottom: '1px solid #979797!important',
    },
    '&:before': {
      content: 'none',
    },
    '&:after': {
      content: 'none',
    }
  },
  label: {
    paddingLeft: '16px',
    '&:hover:not($disabled):before': {
      borderBottom: 'none!important',
    },
    paddingTop: '4px'
  },
  textArea: {
    borderRadius: '4px',
    border: '1px solid #979797',
    paddingLeft: '16px',
    minHeight: '240px',
    '&:hover:not($disabled):before': {
      borderBottom: '1px solid #979797!important',
    },
    '&:before': {
      content: 'none',
    },
    '&:after': {
      content: 'none',
    }
  },
  formControl: {
    margin: 0,
  }
}))

export type IInputClasses = 'input' | 'label' | 'textArea' | 'formControl'