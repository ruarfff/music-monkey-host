import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import { FormGroup, FormControlLabel } from 'material-ui/Form'
import Switch from 'material-ui/Switch'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle
} from 'material-ui/Dialog'

class CreatePlaylistDialog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: '',
      isPublic: true,
      name: ''
    }
  }

  togglePublic = () => {
    this.setState({ ...this.state, isPublic: !this.state.isPublic })
  }

  handleChange = name => event => {
    this.setState({
      ...this.state,
      [name]: event.target.value
    })
  }

  render() {
    const { open, onClose, onPlaylistCreation } = this.props
    return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="create-playlist-form-dialog-title"
      >
        <DialogContent>
          <DialogTitle id="create-playlist-form-dialog-title">
            Create Playlist
          </DialogTitle>
          <TextField
            autoFocus
            required
            margin="normal"
            label="Playlist Name"
            fullWidth
            value={this.state.name}
            onChange={this.handleChange('name')}
          />
          <TextField
            margin="normal"
            label="Playlist Description"
            fullWidth
            multiline
            value={this.state.description}
            onChange={this.handleChange('description')}
          />
          <FormGroup row>
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.isPublic}
                  onChange={this.togglePublic}
                  color="primary"
                />
              }
              label="Public"
            />
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="secondary">
            Cancel
          </Button>
          <Button
            disabled={!this.state.name}
            onClick={() => onPlaylistCreation(this.state)}
            color="primary"
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

CreatePlaylistDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  onPlaylistCreation: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
}

export default CreatePlaylistDialog
