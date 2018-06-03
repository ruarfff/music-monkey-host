import Button from '@material-ui/core/Button/Button'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import * as React from 'react'
import PlaylistsSimpleList from '../playlist/PlaylistsSimpleListContainer'
import PropTypes from 'prop-types'

const ExistingPlaylistDialog = ({ open, onClose, onPlaylistSelected }) => (
  <Dialog
    open={open}
    onClose={onClose}
    aria-labelledby="select-playlist-form-dialog-title"
  >
    <DialogTitle id="select-playlist-form-dialog-title">
      Select a Playist
    </DialogTitle>
    <DialogContent>
      <PlaylistsSimpleList onPlaylistSelected={onPlaylistSelected} />
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary">
        Cancel
      </Button>
    </DialogActions>
  </Dialog>
)

ExistingPlaylistDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  onPlaylistSelected: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
}

export default ExistingPlaylistDialog
