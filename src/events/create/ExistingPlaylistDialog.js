import Button from 'material-ui/Button'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle
} from 'material-ui/Dialog'
import * as React from 'react'
import PlaylistsSimpleList from '../../playlists/PlaylistsSimpleListContainer'
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
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onPlaylistSelected: PropTypes.func.isRequired
}

export default ExistingPlaylistDialog
