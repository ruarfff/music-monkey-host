import Button from '@material-ui/core/Button/Button'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle
} from '@material-ui/core/Dialog/Dialog'
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
  onClose: PropTypes.func.isRequired,
  onPlaylistSelected: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
}

export default ExistingPlaylistDialog
