import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle
} from 'material-ui/Dialog'

const CreatePlaylistDialog = ({ open, onClose }) => (
  <Dialog
    open={open}
    onClose={onClose}
    aria-labelledby="create-playlist-form-dialog-title"
  >
    <DialogTitle id="create-playlist-form-dialog-title">
      Create Playlist
    </DialogTitle>
    <DialogContent />
    <DialogActions>
      <Button onClick={onClose} color="primary">
        Cancel
      </Button>
      <Button onClick={onClose} color="primary">
        Subscribe
      </Button>
    </DialogActions>
  </Dialog>
)

CreatePlaylistDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default CreatePlaylistDialog
